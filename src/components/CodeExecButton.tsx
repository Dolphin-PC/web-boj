import { Button } from "@mui/material";
import React, { ReactElement } from "react";
import { inputTypeInterface } from "../interfaces/data";

interface propType {
  inputType: inputTypeInterface | undefined;
  inputValue: string | undefined;
  code: string;
  setCodeResult: Function;
}
const CodeExecButton = ({
  inputType,
  inputValue,
  code,
  setCodeResult,
}: propType): ReactElement => {
  const onExecutionCode = (): void => {
    // 코드실행전, 유효성 체크
    if (inputType === undefined) return alert("입력유형을 선택해주세요.");
    if (inputValue === undefined) return alert("입력값을 입력해주세요.");

    // 코드 입력값 환경 세팅
    const pre_setting = `
      const __inputValue = ${inputValue};
      ${inputType.execCode}
    `;

    // 실제 코드 실행
    try {
      const looseJsonParse = (code: string): any => {
        Function(`
          ${pre_setting}
        `)();
      };
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
