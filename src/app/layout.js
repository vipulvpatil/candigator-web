import "./globals.css"
import {NextAuthProvider} from "./AuthProvider"
import {Quicksand} from "next/font/google"

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
      <body className={quicksand.variable}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
