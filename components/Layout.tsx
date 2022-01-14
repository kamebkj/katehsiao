import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import ModeToggle from './ModeToggle'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

type Props = {
  children?: ReactNode
  title?: string
}

declare const analytics: any

const Layout = ({ children, title = 'Default title' }: Props) => {
  const router = useRouter()

  return (
    <div className="max-w-screen-sm mx-auto px-6">
      <Head>
        <title>Kate Hsiao</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤓</text></svg>"
        />

        <script>
          {`
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="PHgVYxOpQ00K5IvnTtO9T2VQQ5KsYpSb";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("PHgVYxOpQ00K5IvnTtO9T2VQQ5KsYpSb");
  analytics.page();
  }}();`}
        </script>
      </Head>

      <header>
        <nav className="flex justify-between space-x-6 py-10 antialiased text-gray-500 dark:text-gray-400 transition-all">
          <div className="flex-grow">
            <Link href="/" passHref>
              <a className={router.pathname === '/' ? 'active' : ''}>
                Kate Hsiao
              </a>
            </Link>
          </div>
          <div>
            <Link href="/projects" passHref>
              <a className={router.pathname === '/projects' ? 'active' : ''}>
                Work
              </a>
            </Link>
          </div>
          <div>
            <Link href="/about" passHref>
              <a className={router.pathname === '/about' ? 'active' : ''}>
                About
              </a>
            </Link>
          </div>
        </nav>
      </header>
      {children}
      <footer>
        <div className="py-20 flex text-lg text-gray-500">
          <div className="flex flex-grow space-x-3">
            <a
              href="https://twitter.com/kamebkj"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                analytics.track('Twitter Link Clicked')
              }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/kamebkj"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                analytics.track('Github Link Clicked')
              }}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/khsiao"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                analytics.track('LinkedIn Link Clicked')
              }}
            >
              <FaLinkedin />
            </a>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
