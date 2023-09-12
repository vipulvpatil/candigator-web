import "./globals.css"
import GoogleAnalytics from "@/components/analytics/google_analytics"
import GoogleTagManager from "@/components/analytics/google_tag_manager"
import {NextAuthProvider} from "./AuthProvider"
import {Quicksand} from "next/font/google"
import TestModeProvider from "@/components/test_mode/test_mode_provider"


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
      <GoogleAnalytics/>
      <GoogleTagManager/>
      <body className={quicksand.variable}>
        <TestModeProvider>
          <NextAuthProvider>
            {children}
          </NextAuthProvider>
        </TestModeProvider>
      </body>
    </html>
  )
}

export default RootLayout
