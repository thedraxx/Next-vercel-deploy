import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <>
        {
          <MainLayout>
            <h1><p>HOME</p>
              <Link href="/about">
                ir a About
              </Link>
            </h1>
          </MainLayout>
        }
    </>
  )
}
