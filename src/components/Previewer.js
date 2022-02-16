import React from "react";

import "./Previewer.css";
import { marked } from "marked";

function Previewer(props) {
  const { text } = props;

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}
    />
  );
}

export default Previewer;
