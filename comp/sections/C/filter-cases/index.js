import { useState } from 'react';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import SVG from './svg';

import css from './+.module.scss';

// ==============================================

const filter_cases = ['case 1', 'case 2'];

// ==============================================

export default function FiterCases() {
  // --------------------------------------------

  const [filter_case, setFilterCase] = useState(NaN);

  const handleClick = (n) => () => setFilterCase(n);

  // --------------------------------------------

  const menu = (
    <Menu>
      {filter_cases.map((filter_case, n) => (
        <Menu.Item key={n} onClick={handleClick(n)}>
          <p>{filter_case}</p>
        </Menu.Item>
      ))}
    </Menu>
  );

  // --------------------------------------------

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a
        className={`ant-dropdown-link ${css.filter_cases}`}
        onClick={(e) => e.preventDefault()}
      >
        <SVG /> Filter Cases <DownOutlined />
        <div className={css.filter_case}>{filter_cases[filter_case]}</div>
      </a>
    </Dropdown>
  );
}
