import React from 'react'
import styles from "./page.module.css"
import { blogs } from './data'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.container}>
      {
        blogs.map(blog => {
          return (
            <div key={blog.id} className={styles.blog}>
              <div className={styles.blogText}>
                <Link href={`/blog/${blog.id}`}>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogSumm}>{blog.summary}</p>
                </Link>
              </div>
              <Link href={`/blog/${blog.id}`} className={styles.imgSection}>
                <div className={styles.imgContainer}>
                  <Image className={styles.blogimg} src={blog.img} alt='Blog Img' fill={true} />
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