import { useState } from "react";

import Toolbars from "./components/Toolbars";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

import { placeholder } from "./data";
import "./App.css";

function App() {
  const [textData, setTextData] = useState({
    text: placeholder,
    editorExpand: false,
    previewExpand: false,
  });

  const handleTextChange = (event) => {
    let value = event.target.value;
    setTextData({
      text: value,
      editorExpand: false,
      previewExpand: false,
    });
  };

  const handleClickEditorExpand = () => {
    setTextData((prev) => ({
      text: prev.text,
      editorExpand: !prev.editorExpand,
      previewExpand: prev.previewExpand,
    }));
  };

  const handleClickPreviewExpand = () => {
    setTextData((prev) => ({
      text: prev.text,
      editorExpand: prev.editorExpand,
      previewExpand: !prev.previewExpand,
    }));
  };

  return (
    <>
      <div className="app">
        <div className="container-app">
          <div
            className={
              "editor-wrapper" + " " + (textData.previewExpand ? "hide" : "")
            }
          >
            <Toolbars
              text="Editor"
              onClick={handleClickEditorExpand}
              textData={textData}
            />
            <Editor handleTextChange={handleTextChange} textData={textData} />
          </div>
          <div
            className={
              "previewer-wrapper" + " " + (textData.editorExpand ? "hide" : "")
            }
          >
            <Toolbars
              text="Previewer"
              onClick={handleClickPreviewExpand}
              textData={textData}
            />
            <Previewer text={textData.text} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
