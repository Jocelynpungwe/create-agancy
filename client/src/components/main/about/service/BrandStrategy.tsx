import { type BrandLinks } from '../../../../utils/links'

const BrandStrategy = ({ number, heading, desc }: BrandLinks) => {
  return (
    <article className="arcticle-brand">
      <span className="brand-span">{number}</span>
      <div className="arcticle-brand-div">
        <h3>{heading}</h3>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export default BrandStrategy
