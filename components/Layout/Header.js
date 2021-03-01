import { useState } from 'react';
import Link from 'next/link';
import { Context } from '../../context/Context';
import { SignOut } from '../Auth';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { currentUser, toggleModal } = Context();

  const handleOpenDropdown = () => {
    setOpenDropdown((prevState) => !prevState);
  };

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
        <nav className="w-52">
          <ul className="flex flex-row-reverse justify-between">
            <li className="w-1/2">
              <div className="flex justify-center relative">
                <button onClick={handleOpenDropdown}>Avatar</button>
                {openDropdown && (
                  <ul className="flex flex-col items-center absolute top-6 left-0 py-1 bg-white w-full">
                    <li>
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li>
                      <SignOut />
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="w-1/2">
              <button onClick={toggleModal}>Add image</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
