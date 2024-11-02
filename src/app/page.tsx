"use client";
import DVDKachel from "@/components/DVDKachel";
import Terminal from "@/components/Terminal";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-full flex-col overflow-hidden">
      <Terminal delay={60}>
        <div>
          Hi there, I&apos;m Jelena <br />
          I&apos;m a frontend developer who loves to learn new things.
          <br />
          One example is this page, it&apos;s self hosted on a vps with coolify.
          <br />
          <br />
          So feel free to take a look around and contact me. <br />
          <br />
        </div>
        The stuff I work with in my free time
        <div className="flex h-72 w-full border">
          <DVDKachel
            icons={[
              <div key={0} className="min-w-40">
                <BiLogoJavascript size={50} />
                <div>JavaScript</div>
              </div>,
              <div key={1} className="min-w-40">
                <BiLogoTypescript size={50} />
                <div>TypeScript</div>
              </div>,
              <div key={2} className="min-w-40">
                <FaJava size={50} />
                <div>Java</div>
              </div>,
            ]}
          />
        </div>
      </Terminal>
    </main>
  );
}
