import { store } from '@/redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Provider>
  )

}
