import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    if (word === "danger"){
      word = "Error: ";
      return word;
    }
    else if (word === "success"){
      return "";
    }
  }
  return (
    <div style={{height: '60px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{height: '50px', padding: '10px'}}>
        <strong>{capitalize(props.alert.type)}</strong>{props.alert.msg}
      </div>}
    </div>
  );
};

export default Alert;
