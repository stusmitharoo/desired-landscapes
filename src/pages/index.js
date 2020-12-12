import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

const RECENT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'kitchen',
    description: 'The kitchen has porcelain flooring and a bespoke work surface.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Single bedroom',
    description: 'a single bedroom or office space.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Master bedroom',
    description: 'The master bedroom has newly fitted radiators and en-suite.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Shower room',
    description: 'the shower room is off the master bedroom and has a walk in area.',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Bi-fold doors',
    description: 'Bespoke fitted Bi-fold doors to the back garden.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Patio area',
    description: 'Straight out from the kitchen to the patio built with indian sandstone',
  },
]

const HomeIndex = () => {
  const siteTitle = 'Desired landscapes'
  const siteDescription = 'Desired landscapes portfolio static site'

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
              A family run business with 40 years experience,
              <br />
              Situated on the Hampshire Surrey border.
            </h2>
          </header>
          <p>
            Desired landscapes undertake various types of work including extensions,
            new builds or garage conversions to name a few. With 40 years experience
            you can be sure our builds are to exacting standards and can be confident
            of a nice timely build.
          </p>
          <ul className="actions">
            <Link
              to='/aboutUs'
              className='button'>
              Learn More about us
            </Link>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery
            images={RECENT_IMAGES.map(
              ({ id, source, thumbnail, caption, description }) => ({
                source,
                thumbnail,
                caption,
                description,
              })
            )}
          />

          <ul className="actions">
            <Link
              to='/portfolio'
              className='button'>
              Full Portfolio
            </Link>
          </ul>
        </section>
        <ContactForm />
      </div>
    </Layout>
  )
}

export default HomeIndex
