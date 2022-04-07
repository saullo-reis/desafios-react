import React from "react";

const Text = (props) => {
  return (
    <div className="containerTexto">
      <h3 style={{color: "red"}}>{props.title}</h3>
    </div>
  );
};

export default Text;
