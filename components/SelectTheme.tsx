import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { themes } from "prism-react-renderer";

type SelectThemeProps = {
  onValueChange: (themeName: keyof typeof themes) => void;
};

const SelectTheme = ({ onValueChange }: SelectThemeProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium">Select Theme</span>
      <Select
        defaultValue="dracula"
        onValueChange={onValueChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value="dracula">Dracula</SelectItem>
          <SelectItem value="duotoneDark">Duotone Dark</SelectItem>
          <SelectItem value="duotoneLight">Duotone Light</SelectItem>
          <SelectItem value="github">Github</SelectItem>
          <SelectItem value="jettwaveDark">Jettwave Dark</SelectItem>
          <SelectItem value="jettwaveLight">Jettwave Light</SelectItem>
          <SelectItem value="nightOwl">Night Owl</SelectItem>
          <SelectItem value="nightOwlLight">Night Owl Light</SelectItem>
          <SelectItem value="oceanicNext">Oceanic Next</SelectItem>
          <SelectItem value="okaidia">Okaidia</SelectItem>
          <SelectItem value="oneDark">One Dark</SelectItem>
          <SelectItem value="oneLight">One Light</SelectItem>
          <SelectItem value="palenight">Palenight</SelectItem>
          <SelectItem value="shadesOfPurple">Shades Of Purple</SelectItem>
          <SelectItem value="synthwave84">Synthwave 84</SelectItem>
          <SelectItem value="ultramin">Ultramin</SelectItem>
          <SelectItem value="vsDark">Vs Dark</SelectItem>
          <SelectItem value="vsLight">Vs Light</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectTheme;
