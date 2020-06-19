import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () =>{
    return(
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Saurabh Apraj a Full-stack web developer.</h2>
            <p>Contact me<Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage