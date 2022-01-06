import React from "react";

function Menu(prop) {
  return (
    <div className="note menu">
      <h1>{prop.name}</h1>
      <p>{prop.description}</p>
      <img src={prop.image} width="100%" alt="" />
      <div className="container">
        <p>view menu</p>
        <div className="arrow" style={{ width: "15px", margin: "0 auto" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Menu;
