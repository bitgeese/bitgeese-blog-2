import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-slate-800 transition hover:text-primary-500 dark:text-slate-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Maciej Janowski. I am a Digital Nomad working remotly on software products.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-slate-100 object-cover dark:bg-slate-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl dark:text-slate-100">
            I’m Maciej. I live wherever I feel like being at the moment
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600 dark:text-slate-400">
          <p>
 I've been intrigued by technology for as long as I can remember, but my
 journey into programming took a winding path. My first attempt at coding
 came when I was 15, but it wasn't until I was 20 that everything clicked
 when I discovered Python and started freelancing by taking gigs online.
</p>
<p>
 While coding became my passion, I've always been drawn to the great outdoors.
 When I'm not immersed in lines of code, you might find me chasing waves
 while surfing, exploring new hiking trails, or practicing phrases in a
 new language. These diverse interests have shaped my approach to
 problem-solving in unexpected ways.
</p>
<p>
 My career has been a series of challenges and triumphs. From freelancing
 on marketplaces to securing full-time contract projects, from the fast-paced
 environment of a startup to the structured world of a larger company, and
 then back to freelancing again. I've had my share of unfinished projects
 and failed product launches, but each setback has only fueled my
 determination to keep pushing forward.
</p>
<p>
 Today, I'm a freelance web designer and full-stack developer, specializing
 in bringing MVPs to life for SaaS products and crafting simple, beautiful,
 and lightning-fast websites for businesses. But my journey doesn't stop there.
 As an indie hacker, I'm constantly working on personal projects, driven by
 the goal of building and nurturing multiple small, profitable products.
 My ultimate ambition? To transition into full-time indie hacking, where I
 can fully unleash my creativity and build solutions that make a
 difference.
</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="http://x.com/maciejjanowski" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="http://instagram.com/deadly_goose_/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="http://github.com/bitgeese" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="http://linkedin.com/in/maciej-janowski-57755a149/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:maciekjanowski42@icloud.com"
              icon={MailIcon}
              className="mt-8 border-t border-slate-100 pt-8 dark:border-slate-700/40"
            >
              maciekjanowski42@icloud.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
