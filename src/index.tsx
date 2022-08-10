import React from 'react';
import ReactDOM from 'react-dom/client';


const h1 = <h1>Hello world</h1>

function App() {
  return (
    <div>
        {h1}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id consequatur quis esse tenetur magnam unde minima voluptate rem dicta modi commodi iure, recusandae similique eos atque cupiditate omnis quisquam magni.</p>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);