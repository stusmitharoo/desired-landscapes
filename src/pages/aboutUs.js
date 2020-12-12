import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Kevin from '../assets/images/avatar.jpg';
import Neil from '../assets/images/avatar.jpg';
import Keiren from '../assets/images/avatar.jpg';
import Another from '../assets/images/avatar.jpg';

import Layout from '../components/layout'

const ABOUT_IMAGES = [
  {
    id: '1',
    thumbnail: Kevin,
    caption: 'Kevin Smith',
    description: 'Some words about kevin.',
  },
  {
    id: '2',
    thumbnail: Neil,
    caption: 'Neil Smith',
    description: 'Some words about Neil.',
  },
  {
    id: '3',
    thumbnail: Keiren,
    caption: 'Keiren Smith',
    description: 'Some words about Keiren.',
  },
  {
    id: '4',
    thumbnail: Another,
    caption: 'Another Smith',
    description: 'Some words about Another.',
  },
]

const aboutUs = () => {
  const siteTitle = 'Desired landscapes';
  const siteDescription = 'Desired landscapes portfolio static site';
  const renderAboutUs = images => {
    if (!images) return

    const about = images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <a
            className="image avatar"
            href={obj.source}
            onClick={e => {
              e.preventDefault()
            }}
          >
            <img alt={obj.caption} src={obj.thumbnail} />
          </a>

          <h3>{obj.caption}</h3>
          <p>{obj.description}</p>
        </article>
      )
    })

    return <div className="row">{about}</div>
  }
  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Meet the team.
            </h2>
          </header>
        </section>
        <section id="two">
          {renderAboutUs(ABOUT_IMAGES)}
          <ul className="actions">
            <Link
              to='/'
              className='button'>
              Home
            </Link>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default aboutUs
