import TypingEffect from "@/components/TypingEffect";
import { IoCloseCircle } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mx-52 mt-5 flex h-96 flex-col rounded-2xl border-2 bg-zinc-900">
        <IoCloseCircle size={40} className="ml-auto" />
        <div className="flex h-full w-full rounded-b-2xl border-t-2 p-5">
          <TypingEffect delay={100} className="text-4xl font-bold">
            Hi there, I&apos;m Jelena <br />
            I&apos;m a frontend developer who loves to learn new things.
            <br />
            For example like how this website is hosted on a own vps with
            coolify.
            <br />
            <br />
            So you see I like to make things my own instead of just using
            predefined services.
          </TypingEffect>
        </div>
      </div>
    </main>
  );
}
