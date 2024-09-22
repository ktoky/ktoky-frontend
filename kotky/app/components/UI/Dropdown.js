import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Dropdown({
  defaultValue,
  value1,
  value2,
  value3,
  value4,
  value5,
}) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={defaultValue} />
      </SelectTrigger>
      <SelectContent>
        {value1 && (
          <SelectItem className="focus:text-white" value={value1}>
            {value1}
          </SelectItem>
        )}
        {value2 && (
          <SelectItem className="focus:text-white" value={value2}>
            {value2}
          </SelectItem>
        )}
        {value3 && (
          <SelectItem className="focus:text-white" value={value3}>
            {value3}
          </SelectItem>
        )}
        {value4 && (
          <SelectItem className="focus:text-white" value={value4}>
            {value4}
          </SelectItem>
        )}
        {value5 && (
          <SelectItem className="focus:text-white" value={value5}>
            {value5}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
}
