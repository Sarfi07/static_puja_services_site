import { motion } from "framer-motion";

const DiyaFlareTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.8, 0], scale: [0, 3, 6] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Glowing saffron circle */}
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-orange-700 blur-3xl opacity-80" />
    </motion.div>
  );
};

export default DiyaFlareTransition;
