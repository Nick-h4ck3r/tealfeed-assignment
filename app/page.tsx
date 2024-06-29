import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  return (
    <div className="flex flex-col h-screen px-8 py-10">
      <h1 className="py-10 text-center text-3xl font-semibold">
        Realtime code editor with NextJs and Prism{" "}
      </h1>

      <CodeEditor />
    </div>
  );
}
