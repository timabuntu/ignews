import Image from 'next/image';
import logo from '../../public/images/logo.svg';
import { SignInButton } from '../SignInButton';
export const Header = () => {
  return (
    <div className='w-full h-20 border-b border-zinc-700'>
      <header className='flex items-center h-full max-w-6xl px-8 mx-auto'>
        <figure className='grid'>
          <Image src={logo} alt='logo ignews' />
        </figure>

        <nav className='flex w-auto gap-1 ml-20 '>
          <a className="flex items-center justify-center relative h-20 px-2 cursor-pointer text-zinc-300 hover:text-zinc-50 active:after:content-[''] active:after:h-1 active:after: active:after:rounded-tl-sm active:after:rounded-tr-sm active:after:w-full active:after:absolute active:after:bottom-[1px] active:after:left-0 active:after:bg-yellow-500 active:text-zinc-50 active:font-bold">
            Home
          </a>

          <a className="flex items-center justify-center relative h-20 px-2 cursor-pointer text-zinc-300 hover:text-zinc-50 active:after:content-[''] active:after:h-1 active:after: active:after:rounded-tl-sm active:after:rounded-tr-sm active:after:w-full active:after:absolute active:after:bottom-[1px] active:after:left-0 active:after:bg-yellow-500 active:text-zinc-50 active:font-bold">
            Posts
          </a>
        </nav>
        <div className='flex ml-auto'>
          <SignInButton />
        </div>
      </header>
    </div>
  );
};
