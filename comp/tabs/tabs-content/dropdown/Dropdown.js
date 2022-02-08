import { useState } from 'react';

import css from './Dropdown.module.scss';

// ==============================================

export default function TabsContent() {
  // --------------------------------------------

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  // --------------------------------------------

  const options = [
    { title: 'Showers' },
    { title: 'Laundry' },
    { title: 'Case Management' },
    { title: 'Food Boxes' },
    { title: 'Gas Card' },
    { title: 'Food Card' },
    { title: 'Security Deposit' },
    { title: 'Bus Tokens' },
    { title: 'Bus Passes' },
    { title: 'Rental Assistance' },
    { title: 'Food Assistance' },
    { title: 'Mental Health Counseling' },
    { title: 'Life Skills Classes' },
    { title: 'Showers' },
  ];

  // --------------------------------------------

  return (
    <>
      {' '}
      <div className={css.dropdown_container}>
        <div className={`${css.dropdown} ${open ? css.open : css.hide_delay}`}>
          {options.map((option) => (
            <div key={option.title}>
              <input type='checkbox' />
              <span>{option.title}</span>
            </div>
          ))}
        </div>

        <div className={css.dropdown_button} onClick={handleClick}></div>
      </div>
    </>
  );
}
