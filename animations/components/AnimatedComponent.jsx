import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedComponent = ({ 
  children, 
  variants, 
  className = "", 
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  ...props 
}) => {
  const { ref, isInView } = useScrollAnimation(threshold);

  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants || defaultVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent; 