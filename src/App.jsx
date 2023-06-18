import React from "react";
import First from "./First";
import Questions from "./Questions";
import { nanoid } from "nanoid";

export default function App() {
  const [open, setOpen] = React.useState(false);

  function toggleOpen() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="container">
      <div className="content-container">
        {open ? <Questions /> : <First toggleOpen={toggleOpen} />}
      </div>
    </div>
  );
}
