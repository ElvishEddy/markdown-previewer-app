import React from "react";

import "./Toolbars.css";
function Toolbars(props) {
  const { onClick, textData } = props;

  const handleOnClick = () => {
    onClick();
  };
  return (
    <>
      <div className="toolbar-nav">
        <div className="toolbar-label">
          <i className="fa fa-free-code-camp" aria-hidden="true"></i>
          <span className="label">{props.text}</span>
        </div>
        <div className="extend-icon ">
          <span onClick={handleOnClick}>
            {textData?.editorExpand || textData?.previewExpand ? (
              <i className="fa fa-compress" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-expand" aria-hidden="true"></i>
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default Toolbars;
