import { useState } from 'react';
import TabsContent from './tabs-content/Tabs-Content';

import css from './Tabs.module.scss';

// ==============================================

export default function Tabs() {
  // --------------------------------------------

  const [active, setActive] = useState(0);

  // --------------------------------------------

  const clickHandler = (idx) => () => {
    setActive(idx);
  };

  // --------------------------------------------

  const tabs = [
    { title: 'All Programs', color: '#EDE6DF' },
    { title: 'Prevention', color: '#82498D' },
    { title: 'Shelter Support', color: '#BA6F00' },
    { title: 'Aftercare', color: '#57C3FE' },
  ];

  // --------------------------------------------

  return (
    <>
      <div className={css.tabs_container}>
        <div className={css.tabs}>
          {tabs.map((tab, idx) => {
            return (
              <div
                key={idx}
                className={`${css.tab} ${active === idx ? css.active : ''}`}
                style={{ background: tab.color }}
                onClick={clickHandler(idx)}
              >
                {tab.title}
              </div>
            );
          })}
        </div>
        <div className={css.content} style={{ background: tabs[active].color }}>
          <TabsContent />
        </div>
      </div>
    </>
  );
}
