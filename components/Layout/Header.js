import { useState } from 'react';
import Link from 'next/link';
import { Context } from '../../context/Context';
import { SignOut } from '../Auth';
import Dropdown from './Dropdown';

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
                <button
                  onClick={handleOpenDropdown}
                  className="py-1 px-2 border-b-0"
                  ref={AvatarRef}
                >
                  Avatar
                </button>
                {openDropdown && (
                  <Dropdown>
                    <ul>
                      <li className="p-1">
                        <Link href="/profile">Profile</Link>
                      </li>
                      <li className="p-1">
                        <SignOut />
                      </li>
                    </ul>
                  </Dropdown>
                )}
              </div>
            </li>
            <li className="w-1/2">
              <button onClick={toggleModal} className="py-1 px-2">
                Add image
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
