import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectLanguageProps = {
  onValueChange: (lang: string) => void;
};

const SelectLanguage = ({ onValueChange }: SelectLanguageProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium">Select Language</span>
      
      <Select
        defaultValue="javascript"
        onValueChange={onValueChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value="aspnet">ASP.NET</SelectItem>
          <SelectItem value="bash">Bash</SelectItem>
          <SelectItem value="cpp">C++</SelectItem>
          <SelectItem value="csv">CSV</SelectItem>
          <SelectItem value="dart">Dart</SelectItem>
          <SelectItem value="docker">Docker</SelectItem>
          <SelectItem value="go">GO</SelectItem>
          <SelectItem value="graphql">GraphQL</SelectItem>
          <SelectItem value="html">HTML</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="json">JSON</SelectItem>
          <SelectItem value="kotlin">Kotlin</SelectItem>
          <SelectItem value="lua">Lua</SelectItem>
          <SelectItem value="markdown">Markdown</SelectItem>
          <SelectItem value="markup">Markup</SelectItem>
          <SelectItem value="objectivec">Objective-C</SelectItem>
          <SelectItem value="php">PHP</SelectItem>
          <SelectItem value="powershell">PowerShell</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="r">R</SelectItem>
          <SelectItem value="jsx">React JSX</SelectItem>
          <SelectItem value="tsx">React TSX</SelectItem>
          <SelectItem value="regex">Regex</SelectItem>
          <SelectItem value="ruby">Ruby</SelectItem>
          <SelectItem value="rust">Rust</SelectItem>
          <SelectItem value="sass">Sass</SelectItem>
          <SelectItem value="scss">SCSS</SelectItem>
          <SelectItem value="scala">Scala</SelectItem>
          <SelectItem value="sql">SQL</SelectItem>
          <SelectItem value="swift">Swift</SelectItem>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="yaml">YAML</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectLanguage;
