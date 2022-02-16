import React, { useState } from "react";

import "./Editors.css";

function Editor(props) {
  const { textData, handleTextChange } = props;
  const { text, editorExpand, previewExpand } = textData;

  return (
    <>
      <textarea
        id="editor"
        value={text}
        onChange={handleTextChange}
        className={"editor" + " " + (editorExpand ? "maximize" : "")}
      />
    </>
  );
}

export default Editor;
