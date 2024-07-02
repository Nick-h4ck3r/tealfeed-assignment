"use client";

import { CodeEditor, SelectTheme, SelectLanguage } from "@/components/index";

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
        Realtime Code Editor with NextJs and Prism{" "}
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-2 items-center max-w-5xl mx-auto">
        <SelectTheme onValueChange={setTheme} />
        <SelectLanguage onValueChange={setLang} />
      </div>

      <CodeEditor
        theme={prismaTheme}
        lang={lang}
      />
    </div>
  );
}
