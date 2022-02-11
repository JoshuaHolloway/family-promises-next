import { useState } from 'react';

import SVG1 from './svg/svg-1';
import SVG2 from './svg/svg-2';
import SVG3 from './svg/svg-3';
import SVG4 from './svg/svg-4';
import SVG5 from './svg/svg-5';
import SVG6 from './svg/svg-6';

import css from './+.module.scss';

// ==============================================

export default function NavLinks() {
  // --------------------------------------------

  const [active, setActive] = useState(0);

  const handleClick = (n) => () => setActive(n);

  // --------------------------------------------

  const nav_links = [
    {
      svg: <SVG1 />,
      title: 'DASHBOARD',
    },
    {
      svg: <SVG2 />,
      title: 'CALENDAR',
    },
    {
      svg: <SVG3 />,
      title: 'CASES',
    },
    {
      svg: <SVG4 />,
      title: 'RESOURCES',
    },
    {
      svg: <SVG5 />,
      title: 'SERVICES',
    },
    {
      svg: <SVG6 />,
      title: 'INTAKE',
    },
  ];

  // --------------------------------------------

  return (
    <div className={css.container}>
      {nav_links.map((x, n) => (
        <div
          key={x.title}
          // className={css.nav_link}
          className={`${css.nav_link} ${active === n ? css.active : ''}`}
          onClick={handleClick(n)}
        >
          {x.svg}
          <p>{x.title}</p>
        </div>
      ))}
    </div>
  );
}
