import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="PCEA Church Logo" className="h-12"/>
          <span className="font-heading text-xl text-primary font-bold">PCEA Center</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-neutralDark font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/ministries/youth">Ministries</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/media">Media</Link></li>
          <li><Link href="/donate">Donate</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
    }
