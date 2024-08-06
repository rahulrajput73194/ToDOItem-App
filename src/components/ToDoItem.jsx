import React from "react";

function todoItem(props) {
  function handleClick() {}

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>;
    </div>
  );
}
export default todoItem;
