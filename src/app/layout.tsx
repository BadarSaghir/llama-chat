import './globals.css'
import type { Metadata } from 'next'
import { Provider } from "../store/Provider"

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className=''>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
