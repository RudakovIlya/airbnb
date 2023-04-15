import './globals.css'
import {PropsWithChildren} from "react";
import {Nunito} from "next/font/google";
import {Navbar} from "@/app/components/navbar/Navbar";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({children}: PropsWithChildren) {
  return (
      <html lang="en">
      <body className={font.className}>
      <Navbar/>
      {children}
      </body>
      </html>
  )
}
