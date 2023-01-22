import React from 'react'

import Section from "../shared/section"
import Blog1 from "../../images/blogs/blog-thumb-1.jpg"
import Blog2 from "../../images/blogs/blog-thumb-2.jpg"
import Blog3 from "../../images/blogs/blog-thumb-3.jpg"

import BlogCard from './blog-card'

import "./style.sass"

const Blogs = () => {
  return (
    <Section
    id="blogs" title="Blogs & Articles" background="dark"
    >
        <div className="blogs-content-wrapper">
            <BlogCard
                user="Lorem lorem"
                date="12-12-1221"
                image={Blog1}
                title="
                Lorem, ipsum dolor sit."
                description="
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptas.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptas."
            />


            <BlogCard
                user="Lorem lorem"
                date="12-12-1221"
                image={Blog2}
                title="
                Lorem, ipsum dolor sit."
                description="
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptas.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptas."
            />

            <BlogCard
                user="Lorem lorem"
                date="12-12-1221"
                image={Blog3}
                title="
                Lorem, ipsum dolor sit."
                description="
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptas.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, voluptas."
            />
        </div>
    </Section>
  )
}

export default Blogs