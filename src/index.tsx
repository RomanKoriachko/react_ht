import React from "react";
import ReactDOM from "react-dom/client";

// jsx
const h1 = <h1>Hello world</h1>;

// createElement
const h2 = React.createElement("h1", null, "Hello world");

function App() {
  return (
    <>
      <div className="test">
        <h1>Hello world</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          consequatur quis esse tenetur magnam unde minima voluptate rem dicta
          modi commodi iure, recusandae similique eos atque cupiditate omnis
          quisquam magni.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          incidunt laudantium id! Odit fugit maiores molestiae, pariatur quos
          soluta quis unde quas nulla reiciendis totam rerum porro, dignissimos
          officiis delectus!
        </p>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
