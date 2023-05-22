import "./globals.css"
import {NextAuthProvider} from "./AuthProvider"
import {Oswald} from "next/font/google"

const oswald = Oswald({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
})

export const metadata = {
  title: "Candidate Tracker",
  description: "Track all your candidate resumes easily",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={oswald.variable}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
