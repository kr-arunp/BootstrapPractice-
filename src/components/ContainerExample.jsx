import React from 'react'

const ContainerExample = () => {
  return (
    <div>
      {/* container-fluid, which is width: 100% at all breakpoints */}
      <div class="container-fluid">
        <h1 className="display-5">container-fluid class</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          architecto reprehenderit porro at animi nulla iusto quos distinctio
          natus atque, similique voluptatum pariatur, maiores, deserunt
          laudantium quidem dicta incidunt tempora cupiditate aperiam quisquam?
        </p>
      </div>
      {/* .container, which sets a max-width at each responsive breakpoint */}
      <div className="container">
        <h1 className="display-5">Container Class</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          maxime cumque pariatur provident accusamus qui consequuntur suscipit
          odit commodi dolores voluptatum hic tempora ipsum doloribus dolor id
          sint laborum debitis, labore quis.
        </p>
      </div>
      {/* .container-{breakpoint}, which is width: 100% until the specified
      breakpoint */}
      <div className="container-760px">
        <h1>Container-breakPoint</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam commodi
          voluptatibus eaque quasi aut reprehenderit animi? Maxime et dolores
          ipsa voluptates similique.
        </p>
      </div>

      <div className="container-lg">
        <h1>Container-lg</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam commodi
          voluptatibus eaque quasi aut reprehenderit animi? Maxime et dolores
          ipsa voluptates similique.
        </p>
      </div>

      <div className="container-sm">
        <h1>Container-sm</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam commodi
          voluptatibus eaque quasi aut reprehenderit animi? Maxime et dolores
          ipsa voluptates similique.
        </p>
      </div>

      <div className="container-md">
        <h1>Container-md</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam commodi
          voluptatibus eaque quasi aut reprehenderit animi? Maxime et dolores
          ipsa voluptates similique.
        </p>
      </div>
      <div className="container-xl">
        <h1>Container-xl</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam commodi
          voluptatibus eaque quasi aut reprehenderit animi? Maxime et dolores
          ipsa voluptates similique.
        </p>
      </div>

      <div className="container-xxl">
        <h1>Container-xxl</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam commodi
          voluptatibus eaque quasi aut reprehenderit animi? Maxime et dolores
          ipsa voluptates similique.
        </p>
      </div>
      <div>
        <div class="container-sm bg-primary text-white mb-3">
          100% wide until small breakpoint
        </div>
        <div class="container-md bg-secondary mb-3">
          100% wide until medium breakpoint
        </div>
        <div class="container-lg bg-warning mb-3">
          100% wide until large breakpoint
        </div>
        <div class="container-xl bg-info text-white mb-3">
          100% wide until extra large breakpoint
        </div>
        <div class="container-xxl bg-dark text-light mb-3">
          100% wide until extra extra large breakpoint
        </div>
        <div class="container-{239px} bg-dark text-light mb-3 ">
          100% wide All extra  breakpoints
        </div>
      </div>
    </div>
  );
}

export default ContainerExample
