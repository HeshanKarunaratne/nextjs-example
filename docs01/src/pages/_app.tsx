import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
export default function App({ Component, pageProps }: AppProps) {
  // console.log("App Component changed ", pageProps)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
