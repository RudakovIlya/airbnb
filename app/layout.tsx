import './globals.css'
import {ReactNode} from "react";
import {Nunito} from "next/font/google";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
      <html lang="en">
      <body className={font.className}>{children}</body>
      </html>
  )
}
