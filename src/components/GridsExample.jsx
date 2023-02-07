import React from 'react'

const GridsExample = () => {
  return (
    <div>
      <div className="container text-center ">
        <div className="row">
          <div className="col bg-success p-5">Column</div>
          <div className="col bg-secondary p-5">Column</div>
          <div className="col bg-info p-5">Column</div>
        </div>
      </div>
      <hr className="container-lg" />
      <div className="container">
        <div className="row text-center justify-content-between">
          <div className="p-4 bg-primary col-lg-3 col-sm-2">
            <hp>column1</hp>
          </div>
          <div className="p-4 col-lg-4 col-sm-3 col-xl-6 bg-warning">
            <p>column-2</p>
          </div>
          <div className="p-4 bg-info col-lg-5 col-sm-5 ">
            <p>column-3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridsExample
