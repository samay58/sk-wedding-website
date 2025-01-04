import { Link } from '../Link';
import { Mail } from 'lucide-react';

interface RSVPButtonProps {
  onClick?: () => void;
}

export function RSVPButton({ onClick }: RSVPButtonProps) {
  return (
    <div className="flex items-center space-x-3">
      <Link
        href="/rsvp"
        onClick={onClick}
        className="relative inline-flex items-center justify-center gap-2 px-6 py-2 overflow-hidden font-playfair font-medium transition-all bg-[#1e1b4b] rounded-md hover:bg-[#2d2a5c] group"
      >
        <span className="relative text-white">RSVP</span>
        <Mail className="w-4 h-4 text-white" />
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
      </Link>
      <span className="text-sm font-playfair font-medium text-gray-500">
        by February 10th
      </span>
    </div>
  );
}