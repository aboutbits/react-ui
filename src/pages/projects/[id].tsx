import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

const Home: React.FC = () => {
  const router = useRouter()
  const id = router.query.id

  return (
    <div className="container mx-auto my-8">
      <Head>
        <title>Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-lg font-bold text-center">{'Project ' + id}</h1>
      </main>
    </div>
  )
}

export default Home
