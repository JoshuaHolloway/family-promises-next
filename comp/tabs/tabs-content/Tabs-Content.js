import Dropdown from './dropdown/Dropdown';

import css from './Tabs-Content.module.scss';

// ==============================================

export default function TabsContent() {
  // --------------------------------------------

  const elems = [
    { title: 'Types' },
    { title: 'Providers' },
    { title: 'Recipients' },
    { title: 'Entries' },
  ];

  // --------------------------------------------

  return (
    <>
      <div className={css.left}>
        <span>Services</span>
        <Dropdown />
      </div>
      <div className={css.right}>
        {elems.map((elem, idx) => {
          return (
            <div key={elem.title} className={css.elem}>
              <span className={css.top}>8</span>
              <span className={css.bottom}>{elem.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
