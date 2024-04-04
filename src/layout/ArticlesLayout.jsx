import { Outlet } from "react-router-dom";

function ArticlesLayout() {
    return (
      <div>
         <h2 className="article__title">Tilla Palov</h2>
         <hr />
         <Outlet/>
      </div>
    )
  }

  export default ArticlesLayout
  