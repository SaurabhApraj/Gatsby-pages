import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () =>{
    return(
        <div>
            <Layout>
            <h1>About Us</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>Contact me<Link to="/contact">Contact me</Link></p>
            <p>Follow me on <a href="https://www.google.com" target="_blank">saurabh_apraj</a></p>
            </Layout>
        </div>
    )
}

export default AboutPage