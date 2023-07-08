import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const Carousel = (props: Props) => {

    // i need an array of random images
    const images = [
        "https://nftstorage.link/ipfs/bafybeigknjddz7izjx7bjrgtm267yxd4me4asrzawal2lp47coh2amnkwm",
        "https://nftstorage.link/ipfs/bafybeiecimoztswv7vt4xbspcpmkhq66ysjdyjnwbbeb2ryql7xaip2r5i",
        "https://nftstorage.link/ipfs/bafybeiabdofehhi4xa5u2kcqxcr7bxczwigerc27x5ekw7rk7wofytqgou",
        "https://nftstorage.link/ipfs/bafybeido5dhukmuuxfuvrercluvjytgj33ktp6s4gdglp6dhfqms2vnnby",
    ]


  return (
      <motion.div animate={{ x: `-${1 * 100}%` }} className="flex">
          {images.map((image, i) => (
              <img key={image} src={image} className="aspect-[3/2] object-cover" />
          ))}
      </motion.div>
  )
}

export default Carousel