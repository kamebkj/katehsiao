import React from 'react'
import Layout from '../components/Layout'

declare const analytics: any

const AboutPage = () => {
  return (
    <Layout title="About">
      <div className="text-3xl font-bold my-4 antialiased">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
          A bit more about Kate
        </span>
      </div>
      <p className="text-base text-gray-700 antialiased dark:text-gray-200 transition-all">
        Currently leading{' '}
        <a
          href="https://evergreen.segment.com"
          target="_blank"
          rel="noreferrer"
          onClick={() => analytics.track('Evergreen Link Clicked on About')}
        >
          Evergreen design system
        </a>{' '}
        at Segment. Previously leading the design for the{' '}
        <a
          href="https://segment.com/product/connections/"
          target="_blank"
          rel="noreferrer"
          onClick={() => analytics.track('Connections Link Clicked on About')}
        >
          Connections
        </a>{' '}
        product at Segment, and{' '}
        <a
          href="https://www.splunk.com/en_us/software/it-service-intelligence.html"
          target="_blank"
          rel="noreferrer"
          onClick={() => analytics.track('Splunk Link Clicked on About')}
        >
          IT products
        </a>{' '}
        at Splunk. You can find my resume at{' '}
        <a
          href="https://read.cv/kamebkj"
          target="_blank"
          rel="noreferrer"
          onClick={() => analytics.track('ReadCV Clicked on About')}
        >
          read.cv/kamebkj
        </a>{' '}
        or if you prefer a{' '}
        <a
          href="https://drive.google.com/file/d/1oZrEKqTgPvYysDS6IdIj4zP0Ue4em3r4/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          onClick={() => analytics.track('PDF Clicked on About')}
        >
          pdf
        </a>{' '}
        version.
        <br />
        <br />
        After focusing on product design for some time, I find my passion in
        design systems and building tools to empower designers and engineers to
        do their best work. It is not too different from building a product that
        helps a specific persona to accomplish their goal, but with system
        design, I get to build the muscle of thinking more horizontally and
        finding patterns in the problem space.
        <br />
        <br />I love surrounding myself with a group of people who are
        passionate about design systems and having constant debates about the
        right altitude to focus on: from setting the vision to pushing pixels,
        from creating components to creating the process to empowering others.
        There are challenges at all stages and that is what makes system design
        fun. <br />
        <br />
        Based in the Bay Area, and still call Taipei my home where most of my
        family is at. Probably spending too much time in Zelda and Animal
        Crossing these days.
      </p>
    </Layout>
  )
}

export default AboutPage
