import Button from "../../components/UI/button/Button";
import { ArrowRight, BaggageClaim, CloudUpload, Trash } from "lucide-react";

export default function ButtonComponent() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex flex-col gap-6">
        <h1>Default</h1>
        <div className="flex flex-col gap-6">
          <Button
            variant="primary"
            iconRight={<ArrowRight />}
            size="lg"
            iconPosition="right"
            className="w-fit"
          >
            Explore products
          </Button>
          <Button
            variant="tertiary"
            iconRight={<ArrowRight />}
            size="lg"
            iconPosition="right"
            className="w-fit"
          >
            Explore products
          </Button>
          <Button
            variant="destructive"
            icon={<Trash />}
            size="lg"
            iconPosition="left"
            className="w-fit"
          >
            Remove item
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1>Only Icon</h1>
        <div className="flex gap-14 w-1/2">
          <Button
            variant="primary"
            icon={<BaggageClaim />}
            size="lg"
            iconPosition="only"
            ariaLabel="baggage claim"
          />
          <Button
            variant="tertiary"
            icon={<CloudUpload />}
            size="lg"
            iconPosition="only"
            ariaLabel="upload"
          />
          <Button
            variant="destructive"
            icon={<Trash />}
            size="lg"
            iconPosition="only"
            ariaLabel="remove"
          />
        </div>
      </div>
    </div>
  );
}
