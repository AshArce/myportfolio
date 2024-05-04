import React from 'react'

const Projects = () => {
    return (
        <section id='projects' className="bg-oceanBlue py-20">
            <div className="container mx-auto py-6 md:py-6 mb-4 px-4 sm:px-6 lg:px-8">
                <h4 className="text-xl md:text-2xl font-semibold text-center text-white font-montserrat mb-0">PROJECTS</h4>
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-white font-montserrat mb-12">MY CREATIVE WORKS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/images/pject1.png" alt="Project 1" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Full-Stack E-Commerce Website</h3>
                            <p className="text-gray-700">Versatile team-oriented website, equipped with full-stack functionality and track progress with our intuitive admin dashboard. Currently in development.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/images/pject2.png" alt="Project 2" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Pixels calculator</h3>
                            <p className="text-gray-700"> a comprehensive tool designed to assist users in managing costs and tasks efficiently within gaming environments. With a built-in timer feature, it ensures timely notifications to optimize industry operations seamlessly. This tool aims to enhance user experience and productivity within gaming platforms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects