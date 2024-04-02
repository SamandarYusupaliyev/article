import { NavLink } from "react-router-dom"

 function PageNotFound() {
  return (
    <div className="pageNotFound-container">
       <h1>PogeNotFound</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus quasi perferendis quis veritatis aliquam error doloribus sint incidunt culpa in excepturi esse ratione quia id voluptatum consequatur! Quia commodi error itaque dicta voluptates quod unde ad fugit autem accusamus fugiat beatae repudiandae, consectetur vel magni tempora velit a doloribus!</p>
        <NavLink to="/">Home Poge</NavLink>
    </div>
  )
}

export default PageNotFound
