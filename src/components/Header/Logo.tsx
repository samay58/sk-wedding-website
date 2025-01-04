import { Link } from '../Link';

export function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link 
        href="/home" 
        className="inline-block"
      >
        <img 
          src="https://cdn.midjourney.com/d4d4766c-9e29-4622-bce3-418de56ac03a/0_3.png"
          alt="Samay & Kamya"
          className="h-12 w-auto object-contain hover:opacity-90 transition-opacity"
        />
      </Link>
    </div>
  );
}