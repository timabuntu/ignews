interface SubscribeButtonProps {
  priceId: number;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return (
    <button className='w-64 h-16 mt-10 font-bold transition bg-yellow-500 rounded-full hover:brightness-75 text-zinc-900'>
      Subscribe now
    </button>
  );
};
