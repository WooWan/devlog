import '@/styles/global.css'
import GlassPane from '@/components/GlassPane'

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="rainbow-mesh h-screen w-screen bg-white p-6">
        <GlassPane className="flex h-full w-full items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  )
}
