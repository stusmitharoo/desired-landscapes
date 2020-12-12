import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({ images, toggleLightbox }) => {
  const imageItems = images.map((obj, i) => {
    return (
      <article className="6u 12u$(xsmall) work-item" key={i}>
        <a
          className="image fit thumb"
          href={obj.source}
          onClick={e => {
            e.preventDefault()
            toggleLightbox(i)
          }}
        >
          <img alt={obj.caption} src={obj.thumbnail} />
        </a>

        <h3>{obj.caption}</h3>
        <p>{obj.description}</p>
      </article>
    )
  })

  return <div className='row'>{imageItems}</div>
}

ImageItem.displayName = 'ImageItem'
ImageItem.propTypes = {
  images: PropTypes.array,
}

export default ImageItem
