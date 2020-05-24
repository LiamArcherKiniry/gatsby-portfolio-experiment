import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}

    render={data => (/* 
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div> 
      <h4 className="prod-head-sub">{data.site.siteMetadata.home.description}</h4>
      */
     
      <div className="inner">
        <div className="prod-left">
                <div className="prod-hcontent">
                  <h1 className="prod-head">{data.site.siteMetadata.home.title}</h1>
                  <h4 className="prod-head-sub">{data.site.siteMetadata.home.description.split('\n').map((item, key) => {
                      return <span key={key}>{item}<br/></span>
                    })}
                  </h4>
                  
                </div>
        </div>
        <div className="prod-right">
                <div className="main-img-hold">
                <img src="./assets/hello.svg" alt="An Illustration of me waving hello to you"/>
                </div>
          
        </div>
      </div>
    )}
  />
)
