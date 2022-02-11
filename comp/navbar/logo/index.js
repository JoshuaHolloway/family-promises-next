import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Logo() {
  return (
    <>
      <Image
        alt='logo'
        src={logo}
        // layout='responsive'
        height={100} // height={364}
        width={388} // width={1066}
      />
    </>
  );
}
