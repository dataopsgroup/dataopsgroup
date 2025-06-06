import React from 'react';
import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';
interface BookNavButtonProps {
  onClick?: () => void;
  className?: string;
}
const BookNavButton: React.FC<BookNavButtonProps> = ({
  onClick,
  className = ""
}) => {
  return <Link to="/book" onClick={onClick} className={`nav-cta-button relative bg-brand-saffron hover:bg-opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block ${className}`} aria-label="Get free PE marketing playbook" style={{
    backgroundColor: '#FBB03B'
  }}>
      <span className="flex items-center gap-2">
        <Book className="h-4 w-4" />
        <span>Copy Our Playbook</span>
      </span>
      <span className="new-badge absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        NEW
      </span>
    </Link>;
};
export default BookNavButton;