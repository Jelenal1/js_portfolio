import { motion } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
import TypingEffect from "./TypingEffect";

const Terminal = ({
  children,
  delay = 30,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div className="mx-auto mt-10 flex min-h-96 w-full max-w-4xl flex-col rounded-2xl border-2 bg-zinc-900">
      <div className="flex items-center border-b-2">
        <div className="ml-4 text-2xl font-bold">Terminal</div>
        <IoCloseCircle size={40} className="my-1 ml-auto mr-2" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full rounded-b-2xl p-5"
      >
        <TypingEffect delay={delay} className="w-full text-2xl font-bold">
          {children}
        </TypingEffect>
      </motion.div>
    </div>
  );
};

export default Terminal;
