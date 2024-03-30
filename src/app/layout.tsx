import './globals.css'

export const metadata = {
  title: 'Mituna',
  description:
    'Application de quiz fait en République démocratique du Congo (RDC). ' +
    "Plus de 300+ questions sur la science, la culture, l'histoire, le sport et plus."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  )
}
