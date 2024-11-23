import { ScrollArea } from "@/components/ui/scroll-area";
import SiteForm from "./site-form";

export default function SiteViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <SiteForm />
      </div>
    </ScrollArea>
  );
}
