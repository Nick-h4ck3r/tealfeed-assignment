"use client";

import React, { useState, useRef, useEffect } from "react";
import { Highlight, PrismTheme, themes } from "prism-react-renderer";

type Props = {
  lang: string;
  theme: PrismTheme;
};

const CodeEditor = ({ lang, theme }: Props) => {
  const [code, setCode] = useState(`function sayHi(name) {
  console.log("Hello, " + name + "!");
}

sayHi("World");`);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (preRef.current) {
      preRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  const resetCode = () => {
    setCode(`function sayHi(name) {
  console.log("Hello, " + name + "!");
}`);

  };

  useEffect(() => {
    const adjustHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    adjustHeight();
  }, [code]);

  const lineCount = code.split("\n").length;
  let textareaPadding = lineCount >= 10 ? "pl-12" : "pl-10";
  lineCount >= 100 ? (textareaPadding = "pl-14") : textareaPadding;

  return (
    <div className="relative w-full max-w-7xl mx-auto border border-gray-300 rounded-lg overflow-hidden">
      <Highlight
        theme={theme}
        code={code}
        language={lang}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            ref={preRef}
            className={`${className} w-full p-4 m-0 overflow-auto whitespace-pre-wrap break-words`}
            style={{ ...style, minHeight: "24rem" }}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                className="table-row"
              >
                <span
                  className="table-cell text-right pr-4 select-none opacity-50 text-sm"
                  style={{ width: lineCount >= 10 ? "3ch" : "2ch" }}
                >
                  {i + 1}
                </span>
                <span className="table-cell">
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span
                        key={key}
                        {...getTokenProps({ token, key })}
                      />
                    ))}
                  </div>
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      <textarea
        ref={textareaRef}
        value={code}
        onChange={handleChange}
        onScroll={handleScroll}
        className={`absolute top-0 left-0 w-full h-full p-4 m-0 bg-transparent resize-none outline-none font-mono text-transparent caret-white overflow-auto whitespace-pre-wrap break-words ${textareaPadding}`}
        spellCheck="false"
        style={{ minHeight: "24rem" }}
      />
    </div>
  );
};

export default CodeEditor;
