import React from 'react'
import propTypes from 'prop-types'
import Button from '../elements/Button'

export default function MostPicked({ data, refMostPicked }) {
  return (
    <section className="container" ref={refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {data.map((item, index) => {
          return (
            <div
              key={`mostPicked-${index}`}
              className={`item column-4 ${index === 0 ? ' row-2' : ' row-1'}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="fw-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="strected-link d-block text-white"
                    type="link"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

MostPicked.propTypes = {
  data: propTypes.array || null,
}
