import React from 'react'

const CollapseExample = () => {
  return (
    <>
      {/* heading tags */}
      <h1 className="h1">Lorem, ipsum.</h1>
      <h1 className="h2">Lorem, ipsum.</h1>
      <h1 className="h3">Lorem, ipsum.</h1>
      <h1 className="h4">Lorem, ipsum.</h1>
      <h1 className="h5">Lorem, ipsum.</h1>
      <h1 className="h6">Lorem, ipsum.</h1>
      {/* Display headings*/}
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magnam
        minima nulla.
      </p>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi
        voluptatem aliquam nemo facere illo at magni eos molestias. Dolorem
        perspiciatis animi itaque! Eligendi sit, fugiat accusantium labore vel
        quo.
      </p>
      <p className="lead text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        excepturi aliquam ipsa praesentium rerum.
      </p>
      <p className="lead text-start">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        excepturi aliquam ipsa praesentium rerum.
      </p>

      <p classNameName="lead text-end">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        excepturi aliquam ipsa praesentium rerum.
      </p>
      <p className="lead">Lead only</p>

      {/* text decoration  */}

      <p className="text-decoration-underline h1">text underlined</p>
      <p className="text-decoration-line-through h1">text underlined</p>
      {/* this is bg color for text */}
      <div>
        <p className="text-bg-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque
          nesciunt dolorum sequi animi maxime!
        </p>

        <p className="text-bg-secondary">
          Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident quam repudiandae eos.
        </p>

        <p className="text-bg-danger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          earum eveniet tenetur in fugiat qui fuga, asperiores hic, aperiam
          nesciunt pariatur quidem.
        </p>

        <p className="text-bg-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at
          soluta a blanditiis eligendi quas consequuntur, tenetur nam hic vitae
          officia aspernatur.
        </p>
        <p className="text-bg-success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at
          soluta a blanditiis eligendi quas consequuntur, tenetur nam hic vitae
          officia aspernatur.
        </p>
        <p className="text-self-sm-start text-bg-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at
          soluta a blanditiis eligendi quas consequuntur, tenetur nam hic vitae
          officia aspernatur.
        </p>
      </div>
    </>
  );
}

export default CollapseExample
