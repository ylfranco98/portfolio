import About from "@/components/About";
import Experience from "@/components/Experience";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  let menuItems = [
    // { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/about" },
    { name: "Experience", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 [background:linear-gradient(-135deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_60%,rgba(43,28,82,1)_94%,rgba(42,25,74,1)_100%)] fixed-gradient h-full w-full">
      <Header menuItems={menuItems} />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Main />
        <About />
        <Projects />
        <Experience />
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
