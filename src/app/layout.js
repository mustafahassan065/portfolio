// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Mustafa Hassan - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}