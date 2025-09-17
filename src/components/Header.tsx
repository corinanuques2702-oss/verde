import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo copy.jpg" 
              alt="Verde Sabroso Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 text-left transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 text-left transition-colors duration-200"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 text-left transition-colors duration-200"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 text-left transition-colors duration-200"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;