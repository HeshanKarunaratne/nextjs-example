import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import './globals.css'

export const metadata = {
  title: 'Heshans Blog',
  description: 'Created by Heshan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
