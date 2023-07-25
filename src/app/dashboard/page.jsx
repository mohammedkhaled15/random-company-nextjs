"use client"
import { useRouter } from "next/navigation"
import styles from "./page.module.css"
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === "loading") {
    return <p>Loading ....</p>
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login")
  }
  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <h3>Welcome {session.data.user.name}</h3>
        <br />
        <h2>dashboard</h2>
      </div>
    )
  }
}

export default Dashboard