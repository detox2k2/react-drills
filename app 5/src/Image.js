import React from "react";

export default function Image(props) {
  return (
    <div>
      <img src={props.myImage} alt="this is my cat image" />
    </div>
  );
}