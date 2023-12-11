import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [language,setLanguage] = useState("En")
  return (

    <header>
      <button onClick={() => setLanguage(language === "En" ? "Ka" : "En")}>{language}</button>
        <Link to={"/"}>Main Page</Link>
        <Link to={"/create"}>Add Task</Link>
    </header>
  )
}

export default Header

