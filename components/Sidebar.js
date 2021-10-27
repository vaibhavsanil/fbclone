import React from 'react';
import { useSession } from 'next-auth/client';
import SidebarRow from './Sidebar/SidebarRow';
import {
  UsersIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  DesktopComputerIcon,
  CalendarIcon,
  ClockIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline';
function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] ">
      <SidebarRow src="/default.png" title="Vaibhav Sanil" />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
