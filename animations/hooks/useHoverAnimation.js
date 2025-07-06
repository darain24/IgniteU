'use client';

export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return {
    isHovered,
    hoverVariants,
    handleHoverStart,
    handleHoverEnd
  };
}; 