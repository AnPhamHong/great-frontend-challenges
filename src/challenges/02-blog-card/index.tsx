import { ArrowRight } from "lucide-react";
import Badge from "@/components/UI/badge/Badge";
import ButtonOrLink from "@/components/UI/button/ButtonOrLink";

export default function BlogCard() {
  return (
    <div className="dark:bg-black border shadow-md border-brand-solid dark:border-secondary  mx-auto mt-2 rounded-lg flex flex-col w-3/4 max-w-[500px]">
      <img
        src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="max-h-96 object-cover rounded-ss-lg rounded-se-lg"
      />
      <div className="flex flex-col gap-3 px-4 py-6">
        <Badge
          className="max-w-40"
          text="Interior"
          variant="success"
          withIcon
        />
        <h2 className="text-lg font-semibold">
          Top 5 Living Room Inspirations
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-base font-medium text-secondary">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <ButtonOrLink href="/project" onClick={() => {}}>
            <div className="text-brand flex items-center">
              Read more <ArrowRight className="ml-1 w-4 h-4 text-brand" />
            </div>
          </ButtonOrLink>
        </div>
      </div>
    </div>
  );
}
