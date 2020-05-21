import React from "react"


import AniLink from "gatsby-plugin-transition-link/AniLink"


export default (props) => (
  <nav className="navigation"> 
    <AniLink swipe to="/" direction="right" >
      Home
    </AniLink>
   
    <AniLink paintDrip to="/contact" hex="#22267A">
      Contact
    </AniLink>
   
  </nav>
  
)
