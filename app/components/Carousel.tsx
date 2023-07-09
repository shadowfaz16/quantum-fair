import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


const Carousel = () => {

    const [index, setIndex] = useState(0);

    const images = [
        'https://nftstorage.link/ipfs/bafybeigb6slir75kg2kmib7ndtfaaba3rdkuqqtmdsup7tlhktmc2rt7uu',
        'https://nftstorage.link/ipfs/bafkreidfle57swao6y4z36pvfuqbinzzmpslztnfpkwlpbhlw5mc7b3goy',
        'https://nftstorage.link/ipfs/bafkreieinb6l42kr5o4dkw54y4ozrgp34qxccsmskmzzxgt7vz3hu3iugq',
    ];

    // Animation variants
    const variants = {
        enter: {
            opacity: 0,
        },
        center: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    };

    // Change the image index every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <AnimatePresence mode='wait'>
            <motion.img
                key={index}
                src={images[index]}
                alt="logo"
                className="rounded-3xl w-full"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"

            />
        </AnimatePresence>
        </>
    )
}

export default Carousel
