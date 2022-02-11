import Ea from './Ea';
import Eb from './Eb';
import Ec_l from './Ec_l';
import Ec_r from './Ec_r';

import css from './+.module.scss';

export default function LayoutE() {
  return (
    <>
      <div className={css.container}>
        <div className={css.Ea}>
          <Ea />
        </div>
        <div className={css.Eb}>
          <Eb />
        </div>
        <div className={css.Ec_l}>
          <Ec_l />
        </div>
        <div className={css.Ec_r}>
          <Ec_r />
        </div>
      </div>
    </>
  );
}
