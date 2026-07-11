import './globals.css'

export const metadata = {
  title: 'Nephyy Store',
  description: 'Layanan Jasa Bot, Pembuatan Website, dan OTP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
