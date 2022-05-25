import { GithubLogo, X } from 'phosphor-react';
import { signIn, signOut, useSession } from 'next-auth/react';

export const SignInButton = () => {
  const { data: session } = useSession();
  //  console.log(session);

  return session ? (
    <button
      type='button'
      className='h-12 px-6 transition rounded-full bg-zinc-700 hover:brightness-75'
      onClick={() => signOut()}
    >
      <div className='flex items-center justify-center gap-4'>
        <div className='p-1 bg-green-400 rounded-full'>
          <GithubLogo weight='fill' size={18} color='#3f3f46' />
        </div>
        <p className='font-semibold'>{session.user?.name}</p>
        <X color='#737380' />
      </div>
    </button>
  ) : (
    <button
      type='button'
      className='h-12 px-6 transition rounded-full bg-zinc-700 hover:brightness-75'
      onClick={() => signIn('github')}
    >
      <div className='flex items-center justify-center gap-4'>
        <div className='p-1 bg-yellow-500 rounded-full'>
          <GithubLogo weight='fill' size={20} color='#3f3f46' />
        </div>
        <p className='font-semibold'>Sign in with Github</p>
      </div>
    </button>
  );
};
