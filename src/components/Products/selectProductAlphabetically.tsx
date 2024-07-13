import { selectProductAlphabeticallyOptions } from "@/pages/Products/utils";
import { Select, SelectItem } from "@nextui-org/react";

function SelectProductAlphabetically(): JSX.Element {
  return (
    <Select label="Alphabetical" variant="bordered" size="sm" className="max-w-40">
      {selectProductAlphabeticallyOptions.map((option, index) => (
        <SelectItem key={index} value={option.label}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}

export default SelectProductAlphabetically;
