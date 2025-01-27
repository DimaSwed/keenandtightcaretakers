interface IProductsData {
  id: string
  title: string
  country: string
  description: string
  image: string
}

export const productsData: IProductsData[] = [
  {
    id: '01',
    title: 'Bühler Group',
    country: 'Switzerland',
    description:
      'A global leader in agricultural processing equipment, including advanced solutions for coffee beans.',
    image: './products/buhler-img1.png'
  },
  {
    id: '02',
    title: 'IMA Group',
    country: 'Italy',
    description:
      'Known for packaging equipment, including automated solutions for the agricultural and coffee sectors.',
    image: './products/ima-img2.png'
  },
  {
    id: '03',
    title: 'Petroncini Impianti',
    country: 'Italy',
    description:
      'Specializes in roasting, cooling, and processing equipment for coffee beans of all types.',
    image: './products/petroncini-img3.png'
  },
  {
    id: '04',
    title: 'Satake Corporation',
    country: 'Japan',
    description:
      'Innovators in grain processing technology, offering sorting and packaging equipment for coffee.',
    image: './products/satake-img4.png'
  },
  {
    id: '05',
    title: 'Changzhou Farthest Machinery',
    country: 'China',
    description:
      'Manufactures equipment for the agricultural sector, including transportation and processing machinery for coffee.',
    image: './products/changzhou-img5.png'
  },
  {
    id: '06',
    title: 'SYNChO Industrial',
    country: 'South Korea',
    description:
      'A supplier of packaging equipment and storage solutions for the coffee and food industries.',
    image: './products/synch-img6.png'
  },
  {
    id: '07',
    title: 'Probat Inc.',
    country: 'USA',
    description:
      'A leading manufacturer of coffee roasting machines and related technologies for precision roasting.',
    image: './products/probat-img7.png'
  },
  {
    id: '08',
    title: 'Cimbria',
    country: 'USA Denmark',
    description:
      'Experts in grain processing, offering sorting and transportation equipment specifically for coffee.',
    image: './products/cimbria-img8.png'
  },
  {
    id: '09',
    title: 'Penagos Hermanos',
    country: 'Colombia',
    description:
      'Manufacturers of grain handling equipment, including transportation and processing solutions for coffee.',
    image: './products/penagos-img9.png'
  }
]
