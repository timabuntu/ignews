import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import avatar from '../public/images/avatar.svg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main>
        <section></section>
        <Image src={avatar} alt='avatar Girl coding' />
      </main>
    </>
  );
};

export default Home;
