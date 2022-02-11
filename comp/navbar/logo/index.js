import Image from 'next/image';
import logo from '../../../public/logo.png';

import css from './+.module.scss';

export default function Logo() {
  return (
    <div className={css.container}>
      <div className={css.img}>
        <Image
          alt='logo'
          src={logo}
          layout='responsive'
          height={50} //height={100} // height={364}
          width={194} //width={388} // $logo-w: 388px  //  width={1066}
        />
      </div>
    </div>
  );
}
