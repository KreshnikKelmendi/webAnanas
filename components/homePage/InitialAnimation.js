import { motion } from "framer-motion";

export default function InitialAnimation() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transition: { delay: 0.5 } }}
      className="fixed bottom-0 left-0 bg-green-main w-screen h-screen z-50 pointer-events-none"
    ></motion.div>
  );
}
