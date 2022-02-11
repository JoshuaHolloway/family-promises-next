import Logo from './logo';

import css from './+.module.scss';

export default function Navbar() {
  return (
    <>
      <nav className={css.navbar}>
        <Logo />
      </nav>
    </>
  );
}
