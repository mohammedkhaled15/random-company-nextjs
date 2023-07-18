import styles from "./blog.module.css"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPost } from "@/app/api/utils/getPost"
import { getAllPosts } from "@/app/api/utils/getAllPosts"


const BlogPost = async ({ params }) => {
  const { id } = params
  const data = await getPost(id)
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
            priority={true}
          />
        </div>
      </div>
      <div className={styles.desc}>{data.desc}</div>
    </div>
  )
}

export const generateStaticParams = async () => {
  const posts = await getAllPosts()
  return posts.map(post => post._id.toString())
}

export default BlogPost