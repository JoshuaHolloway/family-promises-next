import SVG1 from './svg/svg-1';
import SVG2 from './svg/svg-2';
import SVG3 from './svg/svg-3';
import SVG4 from './svg/svg-4';
import SVG5 from './svg/svg-5';
import SVG6 from './svg/svg-6';

import css from './+.module.scss';

export default function NavLinks() {
  return (
    <div className={css.container}>
      <div className='nav_link'>
        <SVG1 />
        <p>DASHBOARD</p>
      </div>
      <div className='nav_link'>
        <SVG2 />
        <p>CALENDAR</p>
      </div>

      <div className='nav_link'>
        <SVG3 />
        <p>CASES</p>
      </div>

      <div className='nav_link'>
        <SVG4 />
        <p>RESOURCES</p>
      </div>

      <div className='nav_link'>
        <SVG5 />
        <p>SERVICES</p>
      </div>

      <div className='nav_link'>
        <SVG6 />
        <p>INTAKE</p>
      </div>
    </div>
  );
}
