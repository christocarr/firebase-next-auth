import Link from 'next/link';
function Header() {
  return (
    <header className="flex justify-between items-center h-20 p-5 border-b border-gray-200">
      <div>
        <Link href="/">LOGO</Link>
      </div>
      <nav className>
        <ul>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
