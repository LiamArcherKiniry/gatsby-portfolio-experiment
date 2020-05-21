import React, { Component } from 'react';




class About extends Component {
    constructor(props) {
      super(props);
      
      this.aboutStyle = {
        backgroundImage: `url(./assets/working.svg)`
      };
   
    };
    
  
    render() {
      return(
        <div id="about" className="about" style={ this.aboutStyle }>
        <div className="prod-left">
            <div className="prod-hcontent">
            <h2 className="prod-head">About</h2>
            <p className="">I'm a UX designer and developer passionate about people, design, and health. Many of my projects have been about making data more accessible and easier for people to explore and interact with. I hope my studies can lead me toward developing knowledge rich experiences for people of all needs. In my free time, you can find doodling, petting my dog, and drinking iced coffee in the dead of winter.</p>
            </div>
        </div>
        <div className="prod-right">
            
            
        </div>
        </div>
    
      )
    }
    
  }
  
  
  export default About;