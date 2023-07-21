import { Button } from "@mui/material";
import React, { ReactElement } from "react";

interface propType {
  code: string;
  setCodeResult: Function;
}
const CodeExecButton = ({ code, setCodeResult }: propType): ReactElement => {
  const onExecutionCode = () => {
    try {
      const looseJsonParse = (obj: string): any => Function(obj)();
      let result = looseJsonParse(code);
      setCodeResult(JSON.stringify(result));
    } catch (e: any) {
      console.error(e);
      setCodeResult(e.toString());
    }
  };
  return (
    <Button variant="contained" onClick={onExecutionCode}>
      코드실행
    </Button>
  );
};

export default CodeExecButton;
