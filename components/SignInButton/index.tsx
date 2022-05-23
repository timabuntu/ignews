import { GithubLogo, X } from 'phosphor-react';
export const SignInButton = () => {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
      type='button'
      className='h-12 px-6 transition rounded-full bg-zinc-700 hover:brightness-75'
    >
      <div className='flex items-center justify-center gap-4 '>
        <div className='p-1 bg-green-400 rounded-full'>
          <GithubLogo weight='fill' size={18} color='#3f3f46' />
        </div>
        <p className='font-semibold'>Thiago Mello</p>
        <X color='#737380' />
      </div>
    </button>
  ) : (
    <button
      type='button'
      className='h-12 px-6 transition rounded-full bg-zinc-700 hover:brightness-75'
    >
      <div className='flex items-center justify-center gap-4 '>
        <div className='p-1 bg-yellow-400 rounded-full'>
          <GithubLogo weight='fill' size={20} color='rgb(63 63 70)' />
        </div>
        <p className='font-semibold'>Sign in with Github</p>
      </div>
    </button>
  );
};
