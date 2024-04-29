import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="bg-oceanBlue">
            <div className="container mx-auto py-2 md:py-4 px-6 sm:px-8 lg:px-8">
                <div className="flex flex-col md:flex-row items-start">
                    <img src="/images/my-photo.png" alt="Your Image" className="w-56 h-auto md:w-56 md:h-auto object-cover mb-4 md:mb-0" />
                    
                    <div className="md:ml-8">
                        <h3 className="text-2xl text-white font-semibold font-montserrat text-customPink mb-4">
                            ABOUT ME
                        </h3>
                        <p className="text-lg font-montserrat text-gray-400 mb-8">
                        
I am deeply committed to create outstanding software that enhances the lives of others around me. I specialize in developing websites and software for clients ranging from individuals, small enterprises to huge corporations. Making Ideas to reality.
                        </p>

                        <h3 className="text-2xl text-white font-semibold font-montserrat text-customPink mb-4">
                           SKILLS
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2">
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Backend Development</p>
                            </div>
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Frontend Design</p>
                            </div>
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Frameworks</p>
                            </div>
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Responsive Design</p>
                            </div>
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Version Control</p>
                            </div>
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">HTML/CSS/Javascript</p>
                            </div>
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Growth Mindset</p>
                            </div>
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Adaptability</p>
                            </div>
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Fast Learner</p>
                            </div>
                            <div className="bg-gray-400 p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Leadership</p>
                            </div>
                        </div>

                        <div className="container mx-auto text-start font-montserrat py-16 pb-0">
                                <a href="files\Arcebuche-john-ashley,resume.pdf" download className="inline-block bg-gray-400 hover:bg-blueSea text-oceanBlue font-semibold py-2 px-4 rounded-lg mb-8">
                                    Download CV
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
