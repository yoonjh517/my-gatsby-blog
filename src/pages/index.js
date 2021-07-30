// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="dog" src="../images/dog.jpeg" />
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;
