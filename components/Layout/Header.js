import Link from 'next/link';

import { Context } from '../../context/Context';

function Header() {
  const { currentUser } = Context();
  return (
    <header className="flex justify-between items-center h-20 p-5 border-b border-gray-200">
      {/* only have clickabel logo when a user is signed in */}
      {currentUser ? (
        <div>
          <Link href="/">LOGO</Link>
        </div>
      ) : (
        <div>LOGO</div>
      )}
      {/* only show nav when a user is signed in */}
      {currentUser && (
        <nav className="w-44">
          <ul className="flex flex-row-reverse justify-between">
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/image-upload">Add image</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
