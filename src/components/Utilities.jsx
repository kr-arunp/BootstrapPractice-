/** @format */

import React from "react";

const Utilities = () => {
  return (
    <>
      <div>
        {/* Margin  */}
        <h1 className="bg-primary m-3 p-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          debitis excepturi iste.
        </h1>
        <h1 className="bg-primary mx-3 px-3 py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          debitis excepturi iste.
        </h1>

        <h1 className="display-4 bg-warning mt-5 mb-5 ms-5 me-5 pt-5 pb-4 ps-5 pe-5 text-center text-capitalize font-monospace cursor-pointer-event ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aliquid veritatis molestiae?
        </h1>
      </div>

      {/* borders */}
      <div>
        <h1 className="ms-4 me-4 border p-2">default Border</h1>
        <h1 className="ms-4 mb-4 border-top  border-end border-5 border-success p-2">
          Customize Border
        </h1>
        <h1 className="ms-4 mb-4 border border-5 border-success p-2 rounded-4">
          Customize Border border Strength
        </h1>

        <h1 className="ms-4 mb-4 border border-5 border-success p-2 rounded-pill">
          Customize Border pill
        </h1>
      </div>
      {/* font weight  */}

      <div>
        <h1 className="fw-bold">font weight bold </h1>
        <h1 className="fw-bolder">font weight bolder</h1>
        <h1 className="fw-light">font weight light</h1>
        <h1 className="fw-lighter"> font weight lighter</h1>
        <h1 className="fst-italic"> font style italic</h1>
        <h1 className="fst-normal"> font weight normal</h1>
      </div>
    </>
  );
};

export default Utilities;
