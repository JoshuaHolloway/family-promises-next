import Logo from './logo';
import Input from './input';
import Profile from './profile';

import css from './+.module.scss';

export default function Navbar() {
  return (
    <>
      <nav className={css.navbar}>
        <Input />
        <Logo />
        <Profile />
      </nav>
    </>
  );
}
