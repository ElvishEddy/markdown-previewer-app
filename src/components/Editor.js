import React from "react";

import { placeholder } from "../data";
function Editor() {
  return (
    <>
      <textarea id="editor" value={placeholder} />
    </>
  );
}

export default Editor;
