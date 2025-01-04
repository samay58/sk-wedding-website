import { useCallback } from 'react';

export function useSound(soundUrl: string) {
  return useCallback(() => {
    const audio = new Audio(soundUrl);
    audio.volume = 0.3;
    audio.play().catch(error => {
      console.log('Audio playback prevented:', error);
    });
  }, [soundUrl]);
}