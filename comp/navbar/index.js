import Logo from './logo';
import Input from './input';

import css from './+.module.scss';

export default function Navbar() {
  return (
    <>
      <nav className={css.navbar}>
        <Input />
        <Logo />
      </nav>
    </>
  );
}
