import './globals.css'

export const metadata = {
  title: 'TUF-on Universe – Universal Flow Theory',
  description:
    'Scientific portal exploring the limits of conventional physics through the Universal Flow Theory.',
  metadataBase: new URL('https://tuf-on.com'),
  openGraph: {
    title: 'TUF-on Universe',
    description: 'Explore the laws of the cosmos with the Universal Flow Theory.',
    url: 'https://tuf-on.com',
    siteName: 'TUF-on',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TUF-on Universe',
    description: 'Scientific simulations powered by Universal Flow Theory.',
    creator: '@tufon_science',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter text-white relative min-h-screen antialiased">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/space-bg.jpg')" }}
        />
        
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        {/* Main content above background */}
        <div className="relative z-20">{children}</div>
      </body>
    </html>
  )
}
