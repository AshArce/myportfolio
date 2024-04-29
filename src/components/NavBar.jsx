import React, { useState } from 'react'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toggleMobileMenu(); // Close mobile menu after clicking a menu item
    }
  };
  return (
    <header className='bg-oceanBlue text-white font-montserrat font-semibold py-8 sticky top-0 z-10'>
      <div className='container mx-auto flex justify-between items-center'>
       <h1 className='text-l font-bold px-4'>Jash</h1>
        {/* Mobile View: Only Menu Icon */}
        <div className='md:hidden flex justify-between items-center px-4'>
          <div>
            <button
              onClick={toggleMobileMenu}
              aria-label={`${isMobileMenuOpen ? 'Close' : 'Open'} Menu`}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop View: Menu in the Middle */}
        <nav className='text-md hidden md:flex md:justify-end space-x-4'>
          <a href='#' onClick={() => scrollToSection('home')}>Home</a>
          <a href='#' onClick={() => scrollToSection('about')}>About</a>
          <a href='#' onClick={() => scrollToSection('projects')}>Projects</a>
          <a href='#' onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>

        {/* Mobile Menu */}
        <nav className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} px-4 py-2`}>
          <div className='flex flex-col space-y-4 text-center'>
            <a href='#' onClick={() => scrollToSection('home')}>Home</a>
            <a href='#' onClick={() => scrollToSection('about')}>About</a>
            <a href='#' onClick={() => scrollToSection('projects')}>Projects</a>
            <a href='#' onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        </nav>

      </div>
    </header>
  )
}

export default NavBar
