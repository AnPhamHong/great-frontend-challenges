import { createContext, useCallback, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as IconSuccess } from "../../../assets/svg/icon-success.svg";
import { ReactComponent as IconDelete } from "../../../assets/svg/icon-delete.svg";
import { ReactComponent as IconInfo } from "../../../assets/svg/icon-info.svg";
import { ReactComponent as IconClose } from "../../../assets/svg/icon-close.svg";
import { cn } from "../../../utils/utils";

type ToastType = "success" | "error" | "info";

interface Toast {
  className?: string;
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastType = "info") => {
    const id = uuidv4();
    const newToast: Toast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  }, []);

  const onCloseToast = (idRemove: string) => {
    const tmpToast = [...toasts];

    const removeToast = tmpToast.filter((v) => v.id !== idRemove);

    setToasts(removeToast);
  };

  const colorMap: Record<ToastType, string> = {
    success: "bg-green-100 dark:bg-green-800",
    error: "bg-red-100 dark:bg-red-",
    info: "bg-orange-100 dark:bg-orange-700",
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            id={toast.id}
            className="relative w-[350px] toast flex items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800"
            role="alert"
          >
            <div className="absolute rounded-tl-md rounded-tr-md top-[-4px] left-0 h-[6px] bg-blue-500 animate-toast-progress w-full" />
            <div
              className={cn(
                "inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg dar",
                colorMap[toast.type]
              )}
            >
              {toast.type === "error" ? (
                <IconDelete className="text-red-500 w-2/3 h-2/3" />
              ) : toast.type === "success" ? (
                <IconSuccess className="fill-green-500 w-2/3 h-2/3" />
              ) : (
                <IconInfo className="fill-orange-500 w-2/3 h-2/3" />
              )}
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{toast.message}</div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5  text-white dark:text-white hover:text-blue-200  dark:hover:text-red-700  rounded-lg  p-1.5  inline-flex items-center justify-center h-8 w-8 "
              data-dismiss-target="#alert-1"
              aria-label="Close"
              onClick={() => onCloseToast(toast.id)}
            >
              <span className="sr-only">Close</span>
              <IconClose />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
