import Link from "next/link";
import React, { Fragment } from "react";

function staticElements() {
  return (
    <div className="container">
      <h1 className="heading">Heading 1</h1>
      <h2 className="subheading">Heading 2</h2>
      <h3 className="small_heading">Heading 3</h3>
      <p className="paragraph">Paaragraph</p>
      <span className="link">
        <Link href={"#"}>Link</Link>
      </span>
      <br />
      <button className="btn btn-light">
        <Link href={"#"}>Button Light</Link>
      </button>{" "}
      <br />
      <button className="btn btn-Dark">
        {" "}
        <Link href={"#"}>Button Dark</Link>
      </button>
    </div>
  );
}

export default staticElements;
