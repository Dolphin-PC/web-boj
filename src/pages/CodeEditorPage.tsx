import {
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import CodeExecButton from "../components/CodeExecButton";
import { inputTypeInterface } from "../interfaces/data";
import inputTypeDataJson from "../inputType.json";

const CodeEditorPage = (): ReactElement => {
  const [inputTypeKey, setInputTypeKey] = useState<string>();
  const [inputType, setInputType] = useState<inputTypeInterface>();
  const onChangeInputTypeKey = (e: SelectChangeEvent) =>
    setInputTypeKey(e.target.value);
  useEffect(
    () =>
      setInputType(
        inputTypeDataJson.filter((obj) => obj.key === inputTypeKey)[0]
      ),
    [inputTypeKey]
  );

  const [inputValue, setInputValue] = useState<string>();

  const [code, setCode] = useState("");
  const [codeResult, setCodeResult] = useState("");

  return (
    <Container sx={{ margin: 2 }}>
      <Stack spacing={3}>
        <Select value={inputTypeKey} onChange={onChangeInputTypeKey}>
          {inputTypeDataJson.map((data: inputTypeInterface) => {
            return (
              <MenuItem key={data.key} value={data.key}>
                {data.displayName}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
          multiline
        />

        <CodeEditor code={code} setCode={setCode} />

        <CodeExecButton
          inputType={inputType}
          inputValue={inputValue}
          code={code}
          setCodeResult={setCodeResult}
        />

        <CodeEditor.Output code={codeResult} />
      </Stack>
    </Container>
  );
};

export default CodeEditorPage;
