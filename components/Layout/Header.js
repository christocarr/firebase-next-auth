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
        <nav className="w-44">
          <ul className="flex flex-row-reverse justify-between">
            <li>
              {/* <Link href="/profile">Profile</Link> */}
              <button onClick={handleOpenDropdown}>Profile</button>
              {openDropdown && (
                <ul className="flex flex-col absolute">
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li>
                    <SignOut />
                  </li>
                </ul>
              )}
            </li>
            <li>
              {/* <Link href="/image-upload">Add image</Link> */}
              <button onClick={toggleModal}>Add image</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
