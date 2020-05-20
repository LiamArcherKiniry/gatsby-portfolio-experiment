import React, { Component } from 'react';
import { Link } from "gatsby"


/* const PostLink = ({ post }) => (
  <article id={post.frontmatter.title} className="c-services__item">
    <div className="c-services__item_inner">
        <div title={post.frontmatter.title + "- illustrated icon"} id={post.frontmatter.path + "-anim"} className="shapeshifter" ></div>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.metaDescription}</p>
            <Link to={post.frontmatter.path} className="after">
              
            </Link>
    </div>
    </article>





    
) */

class Postlink extends Component {
  constructor(props) {
    super(props);
    
    this.sectionStyle = {
      backgroundImage: `url(${this.props.post.frontmatter.thumbnail})`
    };
 
  };
  

  render() {
    return(
      <article id={this.props.post.frontmatter.title} className="c-services__item">
      <div className="c-services__item_inner">
          <div title={this.props.post.frontmatter.title + "- illustrated icon"} id={this.props.post.frontmatter.path + "-anim"} className="shapeshifter" style={ this.sectionStyle }></div>
          <h3>{this.props.post.frontmatter.title}</h3>
          <p>{this.props.post.frontmatter.description}</p>
              <Link to={this.props.post.frontmatter.path} className="after">
                
              </Link>
      </div>
      </article>
  
    )
  }
  
}


export default Postlink;
