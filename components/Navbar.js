"use client";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="text-2xl font-bold">
        <Link href="/">Blog Showcase</Link>
      </div>
      <div className="space-x-4">
        <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
        <DarkModeToggle/>
      </div>
    </nav>
  );
}