import React from "react"
import landingStyles from "./landing.module.css"
import Gallery from "../components/gallery"

export default ({ children }) => (
    
  <div className={landingStyles.landing}>
    {children}
    {/* <Gallery/> */}
  </div>
  
  
)