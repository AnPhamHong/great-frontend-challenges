import { useCallback, useMemo, useState } from "react";
import { ReactComponent as Logo } from "@/assets/svg/logo.svg";
import Button from "@/components/UI/button/Button";
import Toggle from "@/components/UI/toggle/Toggle";
import { dataExtensions } from "@/data/extisions";
import { Extensions } from "@/types/extensions";
import { useToast } from "@/components/UI/toast/Toast";

type Props = {};

export default function ExtensionsList({}: Props) {
  const [originalLstExtension, setOriginalLstExtension] = useState<
    Extensions[]
  >([...dataExtensions]);

  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "inactive"
  >("all");

  const filteredExtensions = useMemo(() => {
    switch (filterStatus) {
      case "active":
        return originalLstExtension.filter((ext) => ext.isActive);
      case "inactive":
        return originalLstExtension.filter((ext) => !ext.isActive);
      default:
        return originalLstExtension;
    }
  }, [originalLstExtension, filterStatus]);

  const onChangeStatusExtension = (
    name: string,
    id: string,
    checked: boolean
  ) => {
    let tempLstExtension = [...originalLstExtension];

    const findIndex = tempLstExtension.findIndex(
      (v) => v.id === id && v.name === name
    );

    if (findIndex !== -1) {
      tempLstExtension[findIndex].isActive = checked;
    }

    setOriginalLstExtension(tempLstExtension);

    addToast(
      `${name} has been ${checked ? "Active" : "Inactive"} 🎉`,
      "success"
    );
  };

  const removeExtension = useCallback((idRemove: string) => {
    setOriginalLstExtension((prev) => prev.filter((v) => v.id !== idRemove));
    addToast(`Extension has been deleted.`, "error");
  }, []);

  const { addToast } = useToast();

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full bg-[#fcfdff] dark:bg-[#1f2535] p-3 rounded-xl flex gap-2">
        <Logo className="min-w-fit" />
        <h1 className="text-[#171717] dark:text-[#f2f5f6] text-2xl">
          Extensions
        </h1>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <h1 className="font-bold text-2xl text-[#171717] dark:text-[#feffff]">
            Extensions List
          </h1>
          <div className="flex gap-4">
            <Button
              variant={filterStatus === "all" ? "destructive" : "tertiary"}
              size="lg"
              iconPosition="right"
              className="w-fit px-3 py-1 rounded-3xl hover:bg-[#de4740] focus:outline-[#aa3026]"
              onClick={() => {
                setFilterStatus("all");
              }}
            >
              All
            </Button>
            <Button
              variant={filterStatus === "active" ? "destructive" : "tertiary"}
              size="lg"
              iconPosition="right"
              className="w-fit px-3 py-1 rounded-3xl hover:bg-[#de4740] focus:outline-[#aa3026]"
              onClick={() => {
                setFilterStatus("active");
              }}
            >
              Active
            </Button>
            <Button
              variant={filterStatus === "inactive" ? "destructive" : "tertiary"}
              size="lg"
              iconPosition="right"
              className="w-fit px-3 py-1 rounded-3xl hover:bg-[#de4740] focus:outline-[#aa3026]"
              onClick={() => {
                setFilterStatus("inactive");
              }}
            >
              Inactive
            </Button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
          {filteredExtensions.map((item, index) => {
            return (
              <div
                key={`${item.name}-${index}`}
                className="border dark:border-[#50576a] bg-[#fcfdff] dark:bg-[#1f2535] shadow-md p-4 box-content rounded-lg flex min-h-28 flex-col justify-between gap-10"
              >
                <div className="flex gap-3">
                  <item.logo
                    className="min-w-[50px] h-[50px]"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col gap-3">
                    <h2 className="dark:text-[#ebeff9]">{item.name}</h2>
                    <p className="dark:text-[#aeb2be]">{item.description}</p>
                  </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                  <Button
                    onClick={() => removeExtension(item.id)}
                    variant="tertiary"
                    size="lg"
                    iconPosition="right"
                    className="dark:text-[#d3d9e3] dark:hover:border-[#481623]  dark:hover:text-[#481623] dark:hover:bg-[#f15b55] w-fit px-3 py-1 rounded-3xl hover:bg-[#c52319] hover:text-white focus:outline-[#aa3026] focus:bg-transparent focus:text-[#33364d]"
                  >
                    Remove
                  </Button>
                  <Toggle
                    id={item.id}
                    checked={!!item.isActive}
                    onChange={(checked) =>
                      onChangeStatusExtension(item.name, item.id, checked)
                    }
                    size="default"
                    mainColor="#c9211a"
                    classNameToggle="peer-focus:ring-2 peer-focus:ring-[#c52319]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
