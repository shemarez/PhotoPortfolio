import React from "react"
import Header from "../components/header"
import Landing from "../components/landing"
import Gallery from "../components/gallery"
import '../styles/index.css'


export default () =>  
(
    <div className="contain-width">

        <Header headerText='Pedram Souri Photography'/>
        <Gallery/>

    </div>
    


)
  

// ReactDOM.render(<Gallery/>,document.getElementById('root'));



