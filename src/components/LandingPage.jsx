import React from 'react'

const LandingPage = () => {
  return (
    <section id='home' className='bg-cover bg-center bg-no-repeat' style={{backgroundImage: "url('/images/heroBg.png')"}}>
        <div className='container mx-auto py-20 md:py-24 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-montserrat font-bold mb-0 text-blueSea">Hello.
                </h1>
                <h1 className="text-customGray text-3xl md:text-4xl lg:text-6xl font-montserrat font-bold py-4 md:py-6">
                    I'm John Ashley
                </h1>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-montserrat font-bold mb-custom-margin-bottom md:mb-32 lg:mb-32 text-gray-500">Full-Stack Web Developer
                </h1>
            </div>
        </div>
    </section>
  )
}

export default LandingPage
