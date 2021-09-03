import Head from 'next/head'
import Feed from '../components/Feed/Feed'
import Groups from '../components/Groups'
import { Header } from '../components/Header'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CloneBook2021</title>
        <meta name="description" content="CloneBook2021 made in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      <main className="flex justify-between ">
        <Sidebar/>
        <Feed />
        <Groups/>
      </main>

    </div>
  )
}
