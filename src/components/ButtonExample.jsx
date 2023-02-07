import React from 'react'

const ButtonExample=() => {
	return (
    <>
      <div>ButtonExample</div>
      <button type="button" className="btn btn-primary">
        This is primary Button
      </button>

      <button type="button" className="btn btn-secondary">
        This is secondary Button
      </button>

      <button type="button" className="btn btn-warning">
        This is warning Button
      </button>
      <button type="button" className="btn btn-success">
        This is success Button
      </button>
      <button type="button" className="btn btn-info">
        This is Info Button
      </button>

      <button type="button" className="btn btn-dark text-white">
        This is dark Button
      </button>
      <button className="btn bg-light text-yellow">This is light Button</button>
      <button type="button" class="btn btn-link">
        This is link Button
      </button>

      <div className="margin-5">
        <a className="btn btn-primary" href="#" role="button">
          Link as Button
        </a>
        <button class="btn btn-secondary" type="button">
          Button as Submit type
        </button>

        <input
          className="btn btn-primary"
          type="button"
          value="This is An Input as Button"
        />
        <input
          class="btn btn-dark "
          type="reset"
          value="Input as Reset button "
        />
      </div>

      <div>
        <button className="btn btn-outline-danger">
          Button with Outlined Danger
        </button>
        <button className="btn btn-outline-primary">
          Button with Outlined Primary
        </button>
        <button className="btn btn-outline-info">
          Button with Outlined Info
        </button>
        <button className="btn btn-outline-light">
          Button with Outlined Light
        </button>
        <button className="btn btn-outline-warning">
          Button with Outlined Warning
        </button>
        <button className="btn btn-outline-dark btn-">
          Button with Outlined dark
        </button>

        <button className="btn btn-outline-dark btn-lg" disabled>
          Button with Outlined dark
        </button>
        <a
          className="btn btn-primary"
          type="button"
          href="#"
          role="Input with disabled"
        >
          Input with disabled
        </a>
      </div>
      <div className="btn-group p-1 gap-4 flex flex-wrap">
        <button className="btn btn-outline-primary">Primary Button</button>

        <button className="btn btn-outline-primary">Primary Button</button>
        <button className="btn btn-outline-primary">Primary Button</button>
      </div>

      {/* Button ToolBar */}
      <div className="btn-toolbar m-2 p-3 row-3 gap-3">
        <div
          className="btn-group btn-group-sm m-2 p-3pl-4 "
          role="group"
          aria-label="First Group Button"
        >
          <button className="btn btn-primary " type="button">
            Button-1
          </button>
          <button className="btn btn-secondary" type="button">
            Button-2
          </button>
          <button className="btn btn-success" type="button">
            Button-3
          </button>
          <button className="btn btn-warning" type="button">
            Button-4
          </button>
        </div>
        <div className="btn-group " role="group" aria-label="Second Group">
          <button className="btn btn-warning">5</button>
          <button className="btn btn-info">6</button>
          <button className="btn btn-danger">7</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-dark">8</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-outline-danger">9</button>
        </div>
      </div>

      <div className="input-group input-group-lg">
        <div class="input-group-text" id="btnGroupAddon">
          @
        </div>

        <input
          type="text"
          class="form-control"
          placeholder="Input group example"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
      </div>

      <div className="button-group">
        <button className="btn btn-primary">1</button>
        <button className="btn btn-secondary">2</button>

        <div className="button-group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" class="btn btn-primary">
          1
        </button>
        <button type="button" class="btn btn-primary">
          2
        </button>

        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}


export default ButtonExample
