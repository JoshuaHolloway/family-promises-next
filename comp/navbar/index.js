import Logo from './logo';
import Input from './input';
import Profile from './profile';

import css from './+.module.scss';

export default function Navbar() {
  return (
    <>
      <nav className={css.navbar}>
        <div className={css.A}>
          <Logo />
        </div>
        <div className={css.B}>
          <Input />
        </div>

        <div className={css.C}>
          <Profile />
        </div>
      </nav>
    </>
  );
}
