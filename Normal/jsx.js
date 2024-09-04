import React from "react";
import ReactDOM from "react-dom/client";

//jsx is not html or xml in js
//jsx is a syntax extension for javascript
//which has syntax like html or xml

//jsx is not understandable by browser
//it is transpiled before reacing js engine
//jsx is transpiled to js by babel- [parcel]
//it means it is converted to  js which is known to engine

//U need to use camelcase to give attributes
//like className to give class
const heading = <h1 className="heading">Hello from react JSX</h1>;

//it returns same object as create element
//there is no diff btwn this and react core create elemnt
//only reason to use this is that this is more user friendly

//u have to wrap jsx in () so babel can understand strt and end
//in case of multiple line

const Para = () => {
    <p>this is a paragraph My name is Aditya</p>;
} 

//react has 2 ways of creating components
//1. functional component
//2. class component

//functional component is a js function that returns jsx elemnt
//first letter of var should be Capital
const num = 1000;
const Heading = () => {
 return  <div>
    {num}
    <h1 className="heading">Hello from functional Component</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);
