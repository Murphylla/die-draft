import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-2 border-brand-navy sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-brand-navy" />
            <span className="font-display font-bold text-xl text-brand-navy">
              Dress it Easy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy hover:text-brand-red"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-brand-navy">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/events" onClick={() => setIsOpen(false)}>Events</MobileNavLink>
            <MobileNavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <MobileNavLink to="/faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-brand-navy hover:text-brand-red transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    className="block px-3 py-2 text-brand-navy hover:text-brand-red transition-colors duration-200 font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;