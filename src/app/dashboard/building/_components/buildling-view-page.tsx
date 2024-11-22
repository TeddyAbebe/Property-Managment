import { ScrollArea } from "@/components/ui/scroll-area";
import BuildingForm from "./building-form";

export default function BuildingViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <BuildingForm />
      </div>
    </ScrollArea>
  );
}
