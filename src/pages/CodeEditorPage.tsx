import { Container } from "@mui/material";
import React, { ReactElement, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import CodeExecButton from "../components/CodeExecButton";

const CodeEditorPage = (): ReactElement => {
  const [code, setCode] = useState("console.log('hello world!');");
  const [codeResult, setCodeResult] = useState("");

  return (
    <Container maxWidth="sm">
      <CodeEditor code={code} setCode={setCode} />

      <CodeExecButton code={code} setCodeResult={setCodeResult} />

      <CodeEditor.Output code={codeResult} />
    </Container>
  );
};

export default CodeEditorPage;
