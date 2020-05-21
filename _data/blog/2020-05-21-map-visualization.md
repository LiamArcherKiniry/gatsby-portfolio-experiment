---
template: BlogPost
path: /MapViz
date: 2020-05-21T20:21:09.023Z
title: Map Visualization
metaDescription: >-
  I designed and prototyped a data visualization system for geographic data, as
  part of my internship at Kodak. I was asked to create a system that allowed
  users to filtered explore the landscape of the data.
thumbnail: /assets/map_30fps.svg
---

### Code Highlighting
```javascript
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
    </div>
  )
}
```
