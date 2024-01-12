'use client'
import React, { useState } from 'react'
import { proyectsData } from '@/constants/proyectsData.js'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Proyects = () => {

    const [hovered, setHovered] = useState(false);

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => {
            return {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.05 * index
                }
            }
        }
    }

    return (
        <main className='flex flex-col max-w-1'>
            <section >
                <h1 className='text-center text-heading1-semibold'>Proyects</h1>
                <p className='py-4 px-8 t text-body-bold'>Full Stack Proyects</p>
                <div className='movie-sv-a'>
                    {proyectsData.map((x, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial='initial'
                                variants={fadeInAnimationVariants}
                                whileInView='animate'
                                viewport={{ once: true }}
                                custom={index}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                <div  key={index} className=' gap-y-4 p-6 rounded-2xl gradient-slate flex flex-col items-center'>
                                    <a href={x.route} target='_blank' >
                                        <img className='hover:scale-105 transition-transform ease-in-out' src={x.image} alt="" />
                                    </a>
                                    <Link href={'/linkH'} className=' text-heading4-medium hover:scale-105 transition-transform ease-in-out'>{x.title}</Link>
                                    <p className='max-h-14 overflow-hidden text-body-normal text-neutral-400'>{x.desc} </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </main>

    )
}

export default Proyects