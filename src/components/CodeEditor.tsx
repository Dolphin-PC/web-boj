import React, { ReactElement, useCallback, useState } from "react";
import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Button } from "@mui/material";

interface propType {
  code: string;
}
interface inputType extends propType {
  setCode: Function;
}

// 참고 : https://uiwjs.github.io/react-codemirror/
const CodeEditor = (props: inputType): ReactElement => {
  const { code, setCode } = props;
  const onChange = useCallback(
    (value: string) => setCode && setCode(value),
    []
  );

  return (
    <div>
      <CodeMirror
        value={code}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={"dark"}
      />
    </div>
  );
};

const Output = (props: propType): ReactElement => {
  return (
    <div>
      <CodeMirror
        value={props.code}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        editable={false}
        theme={"dark"}
      />
    </div>
  );
};

CodeEditor.Output = Output;

export default CodeEditor;
