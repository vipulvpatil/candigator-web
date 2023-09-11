import "./globals.css"
import {NextAuthProvider} from "./AuthProvider"
import {Quicksand} from "next/font/google"
import Script from "next/script"

const quicksand = Quicksand({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-quicksand",
})

export const metadata = {
  title: "Prospect",
  description: "Track all your candidate resumes easily",
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-43N2P9YPN0" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-43N2P9YPN0');
        `}
      </Script>
      <body className={quicksand.variable}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
