import Navbar from '../navbar';
import A from '../sections/A';
import B from '../sections/B';
import C from '../sections/C';
import D from '../sections/D';
import E from '../sections/E';

import css from './+.module.scss';

export default function Layout() {
  return (
    <div className={css.page}>
      <Navbar />

      <main className={css.container}>
        <nav className={css.A}>
          <A />
        </nav>
        <div className={css.B}>
          <B />
        </div>
        <div className={css.C}>
          <C />
        </div>
        <div className={css.D}>
          <D />
        </div>
        <div className={css.E}>
          <E />
        </div>
      </main>
    </div>
  );
}
