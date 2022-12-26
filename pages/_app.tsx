
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { JsxElement } from 'typescript'
import { ReactElement } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page:ReactElement) => JsxElement;
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>

  // )

  return getLayout(<Component {...pageProps} />)
}
