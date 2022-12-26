import MainLayout from '../../components/layouts/MainLayout'
import Link from 'next/link';
import DarkLayout from '../../components/layouts/DarkLayout';
export default function index() {
  return (
    <>
        <h1><p>About</p>
          <Link href="/">
            ir a home
          </Link>
        </h1>
    </>
  )
}


index.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}