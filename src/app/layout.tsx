import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Starship Dashboard',
  description: 'Sample Dashboard for Tesla Model S Browser',
}

export default function RootLayout({
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
