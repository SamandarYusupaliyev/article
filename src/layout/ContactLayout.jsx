import { NavLink,Outlet } from "react-router-dom"

 function ContactLayout() {
    return (
      <div>
         <h2 className="contact__title">Contact</h2>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus vel magni atque est cupiditate magnam ratione exercitationem a blanditiis doloremque, neque, et at totam fuga non tenetur distinctio cum itaque? Ipsum laboriosam architecto numquam quod totam asperiores, ratione beatae. Vitae asperiores quas illum ut rerum iste inventore aliquid libero adipisci?</p>
          <nav>
            <NavLink to="faq">Faq</NavLink>
            <NavLink to="form">Form</NavLink>
          </nav>
          <Outlet/>
      </div>
    )
  }

  export default ContactLayout
