import 'antd/dist/antd.css'
import 'antd-button-color/dist/css/style.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from 'antd'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css'
import { Header } from '../components/Header'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const { Content, Footer } = Layout

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>scope42</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout style={{ minHeight: '100%' }}>
        <Header />
        <Content style={{ backgroundColor: 'white', padding: '50px 50px' }}>
          <div className="site-layout-content"><Component {...pageProps} /></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        TODO
        </Footer>
      </Layout>
    </>
  )
}

export default MyApp
