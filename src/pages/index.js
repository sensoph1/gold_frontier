import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../components/mystyles.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section id="index-hero" class="hero is-large is-bold">
  <div class="hero-body">
    <div class="container">
    <p class="title is-size-1 ">
        Drink Greener
      </p>
      
      
    </div>
  </div>
</section>
<section class="section first-section is-medium">
  <div class="container">
  <div class="columns">
  <div class="column">
      <h1 class="title"> First Column</h1>
      <p class="description">Spicy jalapeno bacon ipsum dolor amet consectetur ribeye tempor, doner esse pig salami duis ham commodo sausage kevin shankle culpa. Meatloaf burgdoggen laboris id officia qui ullamco salami turkey tenderloin prosciutto nisi. Magna fatback excepteur, elit reprehenderit ipsum biltong dolor brisket ut shank. Pastrami eiusmod chicken, salami flank dolore meatloaf qui cupidatat short loin sed. </p>
    </div>
    <div class="is-divider" data-content="OR"></div>
    <div class="column">
    <h1 class="title"> Second Column</h1>
    <p class="description">Spicy jalapeno bacon ipsum dolor amet consectetur ribeye tempor, doner esse pig salami duis ham commodo sausage kevin shankle culpa. Meatloaf burgdoggen laboris id officia qui ullamco salami turkey tenderloin prosciutto nisi. Magna fatback excepteur, elit reprehenderit ipsum biltong dolor brisket ut shank. Pastrami eiusmod chicken, salami flank dolore meatloaf qui cupidatat short loin sed. </p>
    </div>
    <div class="column">
    <h1 class="title"> Third Column</h1>
    <p class="description">Spicy jalapeno bacon ipsum dolor amet consectetur ribeye tempor, doner esse pig salami duis ham commodo sausage kevin shankle culpa. Meatloaf burgdoggen laboris id officia qui ullamco salami turkey tenderloin prosciutto nisi. Magna fatback excepteur, elit reprehenderit ipsum biltong dolor brisket ut shank. Pastrami eiusmod chicken, salami flank dolore meatloaf qui cupidatat short loin sed. </p>
  </div>
  </div>
  </div>
  </section>
  <section class="values section is-medium">
    <div class="container ">
      <h1 class="title has-text-centered">Our Values</h1>
      <p class="body-copy">
      Cillum incididunt eu venison, quis bacon spare ribs in t-bone strip steak. Capicola prosciutto turducken exercitation spare ribs velit dolor in aliquip brisket. Dolore brisket in et beef ribs, fatback qui leberkas. Dolore drumstick veniam frankfurter, sint pancetta spare ribs.
      </p>
      <p class="body-copy is-medium">
      Alcatra lorem tri-tip ipsum, buffalo ham filet mignon est kevin ea elit voluptate mollit beef ribs chicken. Swine est turkey jerky excepteur cillum cupidatat. Cillum esse in, ut tempor andouille brisket reprehenderit pastrami proident beef ad. Pariatur quis drumstick t-bone, lorem ipsum ullamco ad ham hock nostrud deserunt fatback cupim shank.
      </p>
      <p class="body-copy">
      Quis pig adipisicing rump. Flank buffalo commodo kevin pancetta, aute bresaola minim cow venison. Beef boudin ullamco capicola irure, nostrud veniam est aliquip pariatur qui aute. Swine laboris in pancetta commodo jowl bacon. Est veniam labore picanha.
      </p>
    </div>
  </section>

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    {data.allFile.edges.map(img => {
      return <Img resolutions={img.node.childImageSharp.resolutions} />
      })}
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  
</Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

export const pageQuery = graphql`
query ImagesQuery {
  # the filter is usefull if you have multiple source-filesystem instances
  # the name "images" is set in the gatsby-config
allFile(filter: {sourceInstanceName: {eq: "images"}}) {
  edges {
    node {
        childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        resolutions(width: 625) {
          ...GatsbyImageSharpResolutions
        }
      }
  }
}
}
}
`;