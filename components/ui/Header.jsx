import React from 'react'

const Header = () => {
    return (
        <main className='select-none'>
            <section className='flex h-screen justify-center items-center pt-16 '>
                <div>
                    <h1 className='font-bold f text-heading1-bold'>Hi. I'm David</h1>
                    <p>Full Stack Web Developer, UI/UX Designer and App Developer </p>
                </div>
                <div className='max-w-86 object-contain flex'>
                    <img width={400} src="https://res.cloudinary.com/dh01ngdjo/image/upload/v1704302691/Postafolio/vecteezy_feliz-halloween-espeluznante-icono-3d_16766282_epgx6t.png" alt="" />
                </div>
            </section>
        </main>
    )
}

export default Header