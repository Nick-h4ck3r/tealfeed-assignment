"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

const CodeEditor = () => {
  const [code, setCode] = useState(`function sayHi(name) {
    console.log("Hello, " + name + "!");
  }

  sayHi("World");`);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto h-96 border border-gray-300 rounded-lg overflow-hidden">
        <Highlight
          theme={themes.dracula}
          code={code}
          language="javascript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} absolute top-0 left-0 w-full h-full p-4 m-0 overflow-hidden`}
              style={style}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                >
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <textarea
          value={code}
          onChange={handleChange}
          className="absolute top-0 left-0 w-full h-full p-4 m-0 bg-transparent resize-none outline-none font-mono text-transparent caret-white"
          spellCheck="false"
        />
      </div>
    </>
  );
};

export default CodeEditor;
