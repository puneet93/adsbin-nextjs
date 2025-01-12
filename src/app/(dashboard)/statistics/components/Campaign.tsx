import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function Campaign() {
  return (
    <div className="p-5">
      <div className="flex w-full max-w-xl items-center md:gap-5 gap-2.5">
        <Label className="text-nowrap min-w-40">Campaign</Label>
        <Select>
          <SelectTrigger className="w-80 h-11">
            <SelectValue placeholder="Choose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
