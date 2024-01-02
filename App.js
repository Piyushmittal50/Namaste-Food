import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { id: "heading" }, "Nameste React by AK 🚀"); // older way to create react Element
const heading = (<h1 id="heading">React by Akshay saini 🚀</h1>);  // It is React Element , and easy to write

const Title = () => (
    <h1 id="heading">
        Nameste JavaScript
    </h1>
);
// React functional component
const HeadingComponent = () => (
    <div id="container">
        <Title />    {/*component composition  */}
        {heading}  {/*rendering a react Element inside a component  */}
    <h1 id="heading">Nameste React Functional component</h1>
    </div>
);
const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(<HeadingComponent />);
//dom.render(hedaing);


