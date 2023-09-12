import "./globals.css"
import GoogleTagManager from "@/components/analytics/google_tag_manager"
import {NextAuthProvider} from "./AuthProvider"
import {Quicksand} from "next/font/google"

const quicksand = Quicksand({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-quicksand",
})

export const metadata = {
  title: "Prospect Home",
  description: "Track all your candidate resumes easily",
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body className={quicksand.variable}>
        <GoogleTagManager/>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
