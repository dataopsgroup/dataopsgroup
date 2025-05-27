
import React from 'react';
import { Book } from 'lucide-react';

interface BookNavButtonProps {
  onClick?: () => void;
  className?: string;
}

const BookNavButton: React.FC<BookNavButtonProps> = ({ onClick, className = "" }) => {
  const handleClick = () => {
    const bookSection = document.getElementById('book-section');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`nav-cta-button relative bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${className}`}
      aria-label="Get free PE marketing playbook"
    >
      <span className="flex items-center gap-2">
        <Book className="h-4 w-4" />
        <span>📖 Free Playbook</span>
      </span>
      <span className="new-badge absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        NEW
      </span>
    </button>
  );
};

export default BookNavButton;
