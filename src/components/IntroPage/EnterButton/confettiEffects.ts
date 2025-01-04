import confetti from 'canvas-confetti';

export function createSparkleConfetti() {
  const colors = ['#FFD700', '#FFC0CB', '#DDA0DD', '#E6E6FA'];
  
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ['star'],
    colors
  };

  // Create multiple bursts for a more magical effect
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 2,
    origin: { x: 0.5, y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 1.5,
      origin: { x: 0.3, y: 0.6 }
    });
  }, 200);

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 1.5,
      origin: { x: 0.7, y: 0.6 }
    });
  }, 400);
}