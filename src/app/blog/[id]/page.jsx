import styles from "./blog.module.css"
import { blogs } from "../data"
import Image from "next/image"
import { notFound } from "next/navigation"

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: "force-cache" })

  if (!res.ok) return notFound()

  return res.json()
}

const BlogPost = async ({ params }) => {
  const { id } = params
  const data = await getData(id)
  if (!data) return notFound()
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.blogText}>
          <h2>{data.title}</h2>
          <p>{data.summary}</p>
          <h5>Author: {data.author}</h5>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.img}
            alt="img"
            fill
          />
        </div>
      </div>
      <div className={styles.desc}>{data.desc}</div>
    </div>
  )
}

export default BlogPost