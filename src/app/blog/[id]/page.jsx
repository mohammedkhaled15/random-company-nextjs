import styles from "./blog.module.css"
import { blogs } from "../data"
import Image from "next/image"
import { notFound } from "next/navigation"

const BlogPost = ({ params }) => {
  const { id } = params
  const blog = blogs.find(blog => blog.id == id)
  if (!blog) return notFound()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.blogText}>
          <h2>{blog.title}</h2>
          <p>{blog.summary}</p>
          <h5>Author: {blog.author}</h5>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={blog.img}
            alt="img"
            fill
          />
        </div>
      </div>
      <div className={styles.desc}>{blog.description}</div>
    </div>
  )
}

export default BlogPost