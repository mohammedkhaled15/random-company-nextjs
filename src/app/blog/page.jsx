import React from 'react'
import styles from "./page.module.css"
import { blogs } from './data'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "force-cache" })

  if (!res.ok) throw new Error("Error Fetching Data")

  return res.json()
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.container}>
      {
        data.map(blog => {
          return (
            <div key={blog._id} className={styles.blog}>
              <div className={styles.blogText}>
                <Link href={`/blog/${blog._id}`}>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogSumm}>{blog.summary}</p>
                </Link>
              </div>
              <Link href={`/blog/${blog._id}`} className={styles.imgSection}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.blogimg}
                    src={blog.img}
                    alt='Blog Img'
                    fill={true}
                    style={{
                      objectFit: 'cover',
                    }}
                    priority={true} />
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blog