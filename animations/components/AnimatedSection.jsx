import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  containerVariants,
  childrenVariants,
  className = "", 
  staggerDelay = 0.1,
  threshold = 0.1,
  ...props 
}) => {
  const { ref, isInView } = useScrollAnimation(threshold);

  const defaultContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const defaultChildrenVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants || defaultContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={childrenVariants || defaultChildrenVariants}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={childrenVariants || defaultChildrenVariants}>
          {children}
        </motion.div>
      )}
    </motion.section>
  );
};

export default AnimatedSection; 