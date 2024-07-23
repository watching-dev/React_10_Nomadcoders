import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"about-us"}>AboutUS</Link>
        </li>
      </ul>
    </nav>
  );
}
