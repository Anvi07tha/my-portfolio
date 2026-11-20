
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  House,
  UserRound,
  Code,
  FolderKanban,
  GraduationCap,
  Mail
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      setLightMode(true);
      document.body.classList.add("light-theme");
    }
  }, []);

  function toggleTheme() {
    const newMode = !lightMode;

    setLightMode(newMode);

    document.body.classList.toggle("light-theme", newMode);

    localStorage.setItem(
      "portfolio-theme",
      newMode ? "light" : "dark"
    );
  }

  const menuItems = [
    { name: "Dashboard", path: "/", icon: House },
    { name: "About Me", path: "/about", icon: UserRound },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Education", path: "/education", icon: GraduationCap },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <aside className="sidebar">
      <h2 className="logo">Portfolio.</h2>

      <p className="menu-title">MENU</p>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link ${
                pathname === item.path ? "active" : ""
              }`}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <button className="theme-button" onClick={toggleTheme}>
        {lightMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </aside>
  );
}
