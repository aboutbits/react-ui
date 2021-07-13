import Head from 'next/head'
import Link from 'next/link'
import { Button, Variant } from '../components/button/Button'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <Head>
        <title>Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-lg font-bold">AboutBits Next.js Boilerplate</h1>

        <ul className="space-y-4 mx-10 mt-10">
          <li>
            <Link href="/projects/[id]" as="/projects/1">
              <a>Project 1</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/[id]" as="/projects/2">
              <a>Project 2</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/[id]" as="/projects/3">
              <a>Project 3</a>
            </Link>
          </li>
        </ul>
        <div className="mt-8">
          <Button
            onClick={() => console.log('Click Me!')}
            variant={Variant.primary}
          >
            Hello
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Home
