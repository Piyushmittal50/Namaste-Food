import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "I am a h1 Tag"),React.createElement("h2", {}, "I am a h2 Tag")]
)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);