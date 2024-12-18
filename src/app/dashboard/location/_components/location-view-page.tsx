import { ScrollArea } from "@/components/ui/scroll-area";
import LocationForm from "./location-form";

export default function LocationViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <LocationForm />
      </div>
    </ScrollArea>
  );
}
