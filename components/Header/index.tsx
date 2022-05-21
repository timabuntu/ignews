import Image from 'next/image';
import logo from '../../public/images/logo.svg';
export const Header: React.FC = () => {
  return (
    <div className='w-full h-20 border-b border-gray-700'>
      <header className='flex items-center h-full max-w-6xl px-8 mx-auto'>
      <figure>
        <Image src={logo} alt='logo ignews' />
      </figure>

      <nav>
        <a>Home</a>
        <a>Posts</a>
      </nav>
    </div>
  );
};
