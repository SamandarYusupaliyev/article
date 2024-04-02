import { NavLink } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

function Articles() {
    const { data :articles,isPending,error } =useFetch('http://localhost:3000/articles')
  return (
    <div className="article-container">
       {isPending && <h3>Loading...</h3>}
       {error && <h3>{error}</h3>}
       {articles && articles.map((articles)=>{
        return (
          <div className="card" key ={articles.id}>
              <h3>
                Title:{articles.title}
              </h3>
              <p>
                Author: <i>{articles.author}</i>
              </p>

              <NavLink to="">Read More</NavLink>
          </div>
        )
       })}
    </div>
  )
}

export default Articles