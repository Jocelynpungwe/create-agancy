import slideOne from '../assets/tablet/image-slide-1.jpg'
import slideTwo from '../assets/tablet/image-slide-2.jpg'
import slideThree from '../assets/tablet/image-slide-3.jpg'

export type NavLinks = {
  name: string
  link: string
  id: number
}

export type BrandLinks = {
  number: string
  heading: string
  desc: string
}

export type Projects = {
  srcImg: string
  heading: string
  desc: string
}

export const projects: Projects[] = [
  {
    srcImg: slideOne,
    heading: 'Lean Product Roadmap',
    desc: '2019 Project',
  },
  {
    srcImg: slideTwo,
    heading: 'New Majestic Hotel',
    desc: '2018 Project',
  },
  {
    srcImg: slideThree,
    heading: 'Crypto Dashboard',
    desc: '2016 Project',
  },
]

export const navLinks: NavLinks[] = [
  {
    name: 'About',
    link: '#about',
    id: 1,
  },
  {
    name: 'Service',
    link: '#service',
    id: 2,
  },
  {
    name: 'Projects',
    link: '#projects',
    id: 3,
  },
]

export const brand: BrandLinks[] = [
  {
    number: '01',
    heading: 'Brand Strategy',
    desc: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.',
  },
  {
    number: '02',
    heading: 'Brand Design',
    desc: 'Keeping the brand design unique and meaningful helps in communicating the brand’s value effectively.',
  },
  {
    number: '03',
    heading: 'Web Design',
    desc: 'A beautifully crafted website is the best tool for brand  awareness, and ultimately results in increased revenues.',
  },
]
