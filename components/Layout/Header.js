import Link from 'next/link';

import { useAuth } from '../../context/authContext';

function Header() {
  const { currentUser } = useAuth();
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
        <nav>
          <ul>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
