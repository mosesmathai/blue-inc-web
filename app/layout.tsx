
import './globals.css'

export const metadata = {
  title: 'Blue Tech Inc',
  description: 'my songs library',
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}

