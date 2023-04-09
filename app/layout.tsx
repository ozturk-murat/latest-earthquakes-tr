import Header from "./components/header";
import './globals.css'

export const metadata = {
  title: 'Latest Earthquakes - TR',
  description: 'Latest Earthquakes in Turkey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
