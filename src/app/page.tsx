"use client";
import KachelRotation from "@/components/KachelRotation";
import TypingEffect from "@/components/TypingEffect";
import { motion } from "framer-motion";
import { IoCloseCircle, IoLogoJavascript, IoLogoReact } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-auto mt-10 flex h-96 min-h-fit w-full max-w-4xl flex-col rounded-2xl border-2 bg-zinc-900">
        <div className="flex items-center border-b-2">
          <div className="ml-4 text-2xl font-bold">Terminal</div>
          <IoCloseCircle size={40} className="my-1 ml-auto mr-2" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-full w-full rounded-b-2xl p-5"
        >
          <TypingEffect delay={50} className="text-2xl font-bold">
            Hi there, I&apos;m Jelena <br />
            I&apos;m a frontend developer who loves to learn new things.
            <br />
            One example is this page, it&apos;s self hosted on a vps with
            coolify.
            <br />
            <br />
            So feel free to take a look around and contact me.
          </TypingEffect>
        </motion.div>
      </div>
      <h2
        className="mt-10 text-center text-4xl font-bold italic"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        The stuff I work with in my free time
      </h2>
      <div className="mx-auto mt-10 grid aspect-square w-[40rem] max-w-4xl">
        <KachelRotation
          icons={[
            <IoLogoJavascript key={1} size={60} className="m-auto" />,
            <IoLogoReact key={2} size={60} className="m-auto" />,
          ]}
        />
      </div>
    </main>
  );
}
