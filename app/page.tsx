"use client";

import CodeEditor from "@/components/CodeEditor";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { themes } from "prism-react-renderer";
import { useMemo, useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("javascript");
  const [prismaTheme, setPrismaTheme] = useState(themes.dracula);

  const themeObjects = useMemo(
    () => ({
      dracula: themes.dracula,
      duotoneDark: themes.duotoneDark,
      duotoneLight: themes.duotoneLight,
      github: themes.github,
      jettwaveDark: themes.jettwaveDark,
      jettwaveLight: themes.jettwaveLight,
      nightOwl: themes.nightOwl,
      nightOwlLight: themes.nightOwlLight,
      oceanicNext: themes.oceanicNext,
      okaidia: themes.okaidia,
      oneDark: themes.oneDark,
      oneLight: themes.oneLight,
      palenight: themes.palenight,
      shadesOfPurple: themes.shadesOfPurple,
      synthwave84: themes.synthwave84,
      ultramin: themes.ultramin,
      vsDark: themes.vsDark,
      vsLight: themes.vsLight,
    }),
    []
  );

  const setTheme = (themeName: keyof typeof themeObjects) => {
    setPrismaTheme(themeObjects[themeName]);
  };

  return (
    <div className="flex flex-col h-screen px-8 py-10">
      <h1 className="py-10 text-center text-3xl font-semibold">
        Realtime code editor with NextJs and Prism{" "}
      </h1>

      <div className="flex gap-4 mb-2 items-center">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">Select Theme</span>
          <Select
            defaultValue="dracula"
            onValueChange={setTheme}
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

        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">Select Language</span>
          <Select
            defaultValue="javascript"
            onValueChange={setLang}
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
      </div>

      <CodeEditor
        theme={prismaTheme}
        lang={lang}
      />
    </div>
  );
}
