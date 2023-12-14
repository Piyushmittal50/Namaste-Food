//const heading =  React.createElement("h1",{},"hello world from React!");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
   

/*

<div id="parent">
  <div id="child">
    <h1>I am h1 Tag</h1>
  </div>
</div>

*/

//const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I am a h1 Tag")));
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(parent);

/*

<div id="parent">
  <div id="child">
    <h1>I am h1 Tag</h1>
    <h2>I am h2 Tag</h2>
  </div>
</div>

*/

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "I am a h1 Tag"),React.createElement("h2", {}, "I am a h2 Tag")]
)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);