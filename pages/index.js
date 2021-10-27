import Head from 'next/head';
import Header from '../components/Header';

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { getSession } from 'next-auth/client';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({ session }) {
  // if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-200 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header />
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   // Get the user
//   const session = await getSession(context);

//   return {
//     props: {
//       session,
//     },
//   };
// }
