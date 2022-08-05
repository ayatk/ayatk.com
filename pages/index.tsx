import type { NextPage } from 'next'
import Links from '../components/Links'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto max-w-screen-md pt-24">
      <h1 className="text text-5xl mb-6">(´・ω・｀)やあ</h1>
      <p className="mb-6">以下のリンクのどれかを選ぶとええぞ…</p>
      <Links />
    </div>
  )
}

export default Home
