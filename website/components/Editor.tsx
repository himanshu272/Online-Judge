import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/snippets/c_cpp";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { Card, CardContent } from "@material-ui/core";

interface IProps {
  value: string;
  setValue: (d: string) => void;
}

function Editor(props: IProps) {
  return (
    <Card>
      <CardContent>
        <AceEditor
          mode="c_cpp"
          theme="tomorrow"
          value={props.value}
          onChange={(e) => props.setValue(e)}
          name="UNIQUE"
          height="400px"
          width="800px"
          fontSize={16}
          enableBasicAutocompletion={true}
          enableLiveAutocompletion={true}
          enableSnippets={true}
        />
      </CardContent>
    </Card>
  );
}

export default Editor;