import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoBackground } from '../components/IntroPage/VideoBackground';
import { EnterButton } from '../components/IntroPage/EnterButton';
import { BackgroundMusic } from '../components/IntroPage/BackgroundMusic';
import { HomeButton } from '../components/IntroPage/HomeButton';

export function IntroPage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Full-screen video background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full max-w-none object-contain md:object-cover"
          src="https://res.cloudinary.com/dapwx5nno/video/upload/v1734938326/u7innqwpy3rymasv4sv2.mp4"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <HomeButton />
      <BackgroundMusic />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end pb-32">
        <EnterButton onClick={handleEnter} />
      </div>
    </div>
  );
}