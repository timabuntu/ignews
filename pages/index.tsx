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
      <main className='flex justify-between 8 mx-auto max-w-6xl h-[calc(100vh-5rem)] items-center'>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the
            <span>React</span>
          </h1>
          <p>Get access to all the publications</p>
          <span>for $9.90 month</span>
        </section>
        <Image src={avatar} alt='avatar Girl coding' width={336} height={521} />
      </main>
    </>
  );
};

export default Home;
