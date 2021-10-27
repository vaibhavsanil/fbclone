import React from 'react';
import Image from 'next/image';
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  ChevronDownIcon,
  BellIcon,
} from '@heroicons/react/solid';

// Import Header Icons

import HeaderIcon from '../components/Headericon';
import { signOut, session } from 'next-auth/client';

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className=" flex ml-3 items-center rounded-full bg-gray-100 p-2 ">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook ..."
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic will go here */}
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src="/default.png"
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="whitespace-nowrap font-semibold pr-3"> Vaibhav Sanil</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
