import React from "react";
import ReactDOM from "react-dom"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "grandchild" }, "I'm an H1 tag"),
    React.createElement("h2", { id: "heading" }, "I'm an H2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "grandchild" }, "I'm an H1 tag"),
    React.createElement("h2", { id: "heading" }, "I'm an H2 tag"),
  ]),
]);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
