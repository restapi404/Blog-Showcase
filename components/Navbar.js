"use client";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { Typewriter } from "react-simple-typewriter";

export default function Navbar() {
  return (
    <nav className="bg-[#4A0000] dark:bg-[#0C0C24] text-white px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center shadow transition-colors duration-300">
      <div>
        <div className="text-2xl font-bold">
          <Link href="/">Blog Showcase</Link>
        </div>
        <div className="text-[#EDE587] text-sm mt-1">
          <Typewriter
            words={['Discover Projects.', 'Read Amazing Blogs.', 'Showcase Your Work!']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </div>
      </div>
      <div className="space-x-4 mt-2 md:mt-0">
        <Link href="/" className="hover:text-yellow-400 transition-colors duration-200">Home</Link>
        <Link href="/blogs" className="hover:text-yellow-400 transition-colors duration-200">Blogs</Link>
        <Link href="/about" className="hover:text-yellow-400 transition-colors duration-200">About</Link>
        <DarkModeToggle/>
      </div>
    </nav>
  );
}