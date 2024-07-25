"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>home</Link> {path === "/" ? ">_<" : ""}
        </li>
        <li>
          <Link href={"about-us"}>AboutUS</Link>
          {path === "/about-us" ? ">_<" : ""}
        </li>
      </ul>
    </nav>
  );
}
