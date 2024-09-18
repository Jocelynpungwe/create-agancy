import BrandStrategy from './BrandStrategy'
import { brand, type BrandLinks } from '../../../../utils/links'

const Service = () => {
  return (
    <section id="service" className="section-brand">
      <div className="main-container">
        <div>
          <h2>Our approach for creating a winning brand</h2>
        </div>
        {brand.map((brands: BrandLinks) => {
          return <BrandStrategy key={brands.number} {...brands} />
        })}
      </div>
    </section>
  )
}

export default Service
