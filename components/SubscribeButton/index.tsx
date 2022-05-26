import { useSession, signIn } from 'next-auth/react';

interface SubscribeButtonProps {
  priceId: string;
}

const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { data: session } = useSession();

  function handleSubscribe() {
    if (!session) {
      signIn('github');
      return;
    }
  }

  return (
    <button className='w-64 h-16 mt-10 font-bold transition bg-yellow-500 rounded-full hover:brightness-75 text-zinc-900'>
      Subscribe now
    </button>
  );
};

export default SubscribeButton;
