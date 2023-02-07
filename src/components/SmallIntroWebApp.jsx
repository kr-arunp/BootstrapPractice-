import React from 'react'

const SmallIntroWebApp = () => {
  return (
    <>
      {/* Navbar Section */}

      <nav
        className="navbar navbar-expand-sm  text-muted text-white h-100"
        role="navigation"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand btn btn-outline-warning  rounded-4 px-4 mt-2 "
            href="https://github.com/arunkumar201"
            target="_blank"
          >
            Github
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon d-none d-block-md "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center  mt-2 ms-5 align-content-center">
              <li class="nav-item">
                <a
                  className="navbar-brand btn btn-outline-warning  rounded-4 px-4 "
                  aria-current="page"
                  href="#"
                >
                  Skills
                </a>
              </li>
              <li class="nav-item ">
                <a
                  class="navbar-brand btn btn-outline-warning  rounded-4 px-4 "
                  href="#"
                  type="button"
                >
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-item btn btn-outline-warning  rounded-4 px-4 py-2 text-center"
                  href="#"
                  type="button"
                >
                  Coding Profiles
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Introduction and profile Picture */}
      <section id="My-Intro">
        <div className="container-lg">
          <div className="row justify-content-center text-center align-content">
            <div className="col-md-5 row-justify-center text-md-start">
              <h1>
                <div className="display-2">Lorem dolor</div>
                <div className="display-5 text-muted">My Skills</div>
              </h1>
              <p className="lead my-4 text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                deserunt quod soluta!
              </p>
              <a href="" type="button" className="btn btn-secondary btn-lg">
                My Portfolio
              </a>
            </div>
            <div className="col-md-5 text-center d-none d-md-block">
              <img
                src="src/components/img/pic.jpeg"
                alt="Profile-photo"
                className="img-fluid rounded-4 shadow-xg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SmallIntroWebApp
