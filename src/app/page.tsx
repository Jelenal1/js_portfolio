"use client";
import DVDKachel from "@/components/DVDKachel";
import Terminal from "@/components/Terminal";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex h-full flex-col overflow-hidden pt-10">
      <Terminal delay={50}>
        Hi there, I&apos;m Jelena <br />
        I&apos;m a frontend developer who loves to learn new things.
        <br />
        One example is this page, it&apos;s self hosted on a vps with coolify.
        <br />
        <br />
        So feel free to take a look around and contact me. <br />
        <br />
        <div className="flex h-72 w-full border">
          <DVDKachel
            icons={[
              <BiLogoJavascript key={0} size={50} />,

              <BiLogoTypescript key={1} size={50} />,

              <FaJava key={2} size={50} />,

              <SiNextdotjs key={3} size={50} />,
            ]}
          />
        </div>
        <br />
        Follow the white rabbit.
      </Terminal>
    </main>
  );
}
