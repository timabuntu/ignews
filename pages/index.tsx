import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SubscribeButton } from '../components/SubscribeButton';
import avatar from '../public/images/avatar.svg';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    productId: string;
    amount: number;
  };
}

const Home: NextPage<HomeProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className='flex justify-between 8 mx-auto container h-[calc(100vh-5rem)] items-center'>
        <section className='flex flex-col'>
          <div>
            <span className='text-2xl font-semibold'>👏 Hey, welcome</span>
            <h1 className='font-bold text-7xl leading-[4.5rem] mt-10 text'>
              News about the <br />
              <span className='text-cyan-500'>React</span> world.
            </h1>

            <p className='mt-6 text-2xl leading-9'>
              Get access to all the publications
            </p>
            <span className='font-bold text-cyan-500'>
              for{' '}
              {new Intl.NumberFormat('pr-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.amount / 100)}{' '}
              month
            </span>
          </div>
          <SubscribeButton priceId={product.productId} />
        </section>
        <Image src={avatar} alt='avatar Girl coding' width={336} height={521} />
      </main>
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1Jz0a3CTJIQ3J082LEC8gxaV', {
    expand: ['product'],
  });

  const product = {
    prideId: price.id,
    amount: price.unit_amount,
  };

  return {
    props: {
      product,
    },
  };
};
