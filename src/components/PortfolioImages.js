import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const PortfolioImages = ({ images }) => {
  const imageItems = images.map((obj, i) => {
    const link = `/portfolio/${obj.link}`
    return (
      <article className="6u 12u$(xsmall) work-item" key={i}>
        <Link
          className="image fit thumb"
          to={link}
        >
          <img alt={obj.caption} src={obj.thumbnail} />
        </Link>

        <h3>{obj.caption}</h3>
        <p>{obj.description}</p>
      </article>
    )
  })

  return <div className='row'>{imageItems}</div>
}

PortfolioImages.displayName = 'ImageItem'
PortfolioImages.propTypes = {
  images: PropTypes.array,
}

export default PortfolioImages
