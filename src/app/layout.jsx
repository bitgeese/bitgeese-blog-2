import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import PlausibleProvider from 'next-plausible'


import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Maciej Janowski',
    default:
      'Maciej Janowski - Freelance Full-Stack Develeoper and designer, indiehacker, and digital nomad',
  },
  description:
    'I’m Maciej, Freelance Full-Stack Develeoper and designer, indiehacker, and digital nomad',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-slate-50 dark:bg-black">
      <PlausibleProvider domain="bitgeese.io" >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        </PlausibleProvider>
      </body>
    </html>
  )
}
