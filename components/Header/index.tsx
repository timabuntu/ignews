import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <div>
      <Image src='/public/images/logo.svg' alt='ig.news' />;
    </div>
  );
};
