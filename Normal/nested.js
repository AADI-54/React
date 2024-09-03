//<div id="parent">
//   <div id="child">
//        <h1>
//
//        </h1>
//    </div>
//</div>
//nested elements using react
import React from "react";
import ReactDOM from "react-dom/client";
const parent_ = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", { id: "heading" }, "Nested tags")
    )
);
const root_ = ReactDOM.createRoot(document.getElementById("root"));

root_.render(parent_);

//<div id="parent">
//   <div id="child">
//        <h1>
//
//        </h1>
//        <h2>
//        </h2>
//    </div>
//</div>
//nested elements using react with siblings
// in this case u will pass array at last arguments

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Im h1 tag"), React.createElement("h2", { id: "heading2" }, "Im h2 tag")]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root2"));

root.render(parent);

// this way u can create siblings but it will give u
//error saying u need to give it a key
//by this way code will become complex so 
// we will use jsx for this