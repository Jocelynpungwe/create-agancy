import BrandDiscription from './BrandDiscription'
import DesignDescription from './DesignDescription'
import DesignImage from './DesignImage'
import Service from './service/Service'

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="section-about-design">
        <DesignImage />
        <DesignDescription />
        <BrandDiscription />
        <Service />
      </div>
    </section>
  )
}

export default About
