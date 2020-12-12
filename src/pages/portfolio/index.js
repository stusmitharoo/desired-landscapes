import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import thumb01 from '../../assets/images/thumbs/05.jpg'
import thumb02 from '../../assets/images/thumbs/06.jpg'
import thumb03 from '../../assets/images/thumbs/03.jpg'
import thumb04 from '../../assets/images/thumbs/04.jpg'
import PortfolioImages from '../../components/PortfolioImages'
import Layout from '../../components/layout'

const PORTFOLIO_IMAGES = [
  {
    id: '1',
    thumbnail: thumb01,
    caption: 'extension',
    description: 'extension on the side of a hill.',
    link: 'one',
  },
  {
    id: '2',
    thumbnail: thumb02,
    caption: 'New build',
    description: 'A new build of 2 houses.',
    link: 'two',
  },
  {
    id: '3',
    thumbnail: thumb03,
    caption: 'Barn conversion',
    description: 'Traditional barn conversion.',
    link: 'three',
  },
  {
    id: '4',
    thumbnail: thumb04,
    caption: 'New bathroom',
    description: 'New fitted bathroom.',
    link: 'four',
  },
]

const portfolio = () => {
  const siteTitle = 'Desired landscapes';
  const siteDescription = 'Desired landscapes portfolio static site';
  const renderPortfolio = images => {
    if (!images) return

    const portfolio = <PortfolioImages images={images} />

    return portfolio
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
              Take a look at our portfolio of other jobs.
            </h2>
          </header>
          <p>
            Another sentence here would be great.
          </p>
        </section>
        <section id="two">
          {renderPortfolio(PORTFOLIO_IMAGES)}
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

export default portfolio
