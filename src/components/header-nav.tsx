import React from "react";
import Link from "next/link";

const sections = [
  // { name: "Home", href: "/" },
  // { name: "Education", href: "/education" },
  { name: "Work Experience", href: "/work-experience" },
  { name: "Projects", href: "/projects" },
  // { name: "CV", href: "/cv" },
  { name: "Personal", href: "/personal" },
  // { name: "Blog", href: "/blogs" },
  // Add more sections as needed
];

export default function HeaderNav() {
  return (
    <header className="w-full bg-white border-b border-zinc-200 py-4 mb-8 sticky top-0 z-50">
      <nav className="max-w-screen-lg mx-auto px-8 flex justify-between items-center">
        {/* Left side - Personal Brand */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="font-serif text-xl font-light text-zinc-800 hover:text-zinc-600 transition-colors duration-300"
          >
            A. Pandey
          </Link>
          {/* <div className="ml-3 text-zinc-400 text-sm font-serif">
            Research Fellow
          </div> */}
        </div>

        {/* Right side - Navigation */}
        <div className="flex gap-8">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="font-serif text-lg font-light text-zinc-700 hover:text-zinc-900 transition-colors duration-300"
            >
              {section.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
