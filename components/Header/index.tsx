import Image from 'next/image';
import logo from '../../public/images/avatar.svg';
export const Header: React.FC = () => {
  return (
    <div>
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
