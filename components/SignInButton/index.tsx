import { GithubLogo } from 'phosphor-react';
export const SignInButton = () => {
  return (
    <button
      type='button'
      className='h-12 px-6 transition rounded-full bg-zinc-700 hover:brightness-75'
    >
      <div className='flex items-center justify-center gap-4 '>
        <div className='p-1 bg-yellow-300 rounded-full'>
          <GithubLogo weight='fill' size={20} color='rgb(63 63 70)' />
        </div>
        <p className='font-semibold'>Sign in with Github</p>
      </div>
    </button>
  );
};
