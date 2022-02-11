import React, { useState } from 'react';
import { Table } from 'antd';

import PlusIcon from './Plus-Icon';
import CaseDetailsModal from './Case-Details-Modal';

// ==============================================

const NOTE_PREVIEW_LEN = 15;

// ==============================================

export default function CaseData() {
  // --------------------------------------------

  const [is_modal_visible, setIsModalVisible] = useState(false);

  // --------------------------------------------

  const clickHandler = () => setIsModalVisible((prev) => !prev);

  // --------------------------------------------

  const data = [
    {
      case_id: 'XXXX',
      first_name: 'A',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'B',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'C',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'D',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'E',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'F',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'G',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'H',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'I',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'J',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'H',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'I',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'J',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'K',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'L',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'M',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'N',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'O',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'P',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'Q',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'R',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'S',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'T',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'U',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'V',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'W',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'X',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'Y',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      case_id: 'XXXX',
      first_name: 'Z',
      last_name: 'Doe',
      note: 'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];

  const dataSource = data.map((d, idx) => ({
    key: idx,
    details: <PlusIcon clickHandler={clickHandler} />,
    case_id: d.case_id,
    first_name: d.first_name,
    last_name: d.last_name,
    note:
      d.note?.length > NOTE_PREVIEW_LEN
        ? `${d.note?.slice(0, NOTE_PREVIEW_LEN)}...`
        : d.note,
  }));

  const cols = [
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Case ID',
      dataIndex: 'case_id',
      key: 'case-id',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first-name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last-name',
    },
    {
      title: 'Lastest Note',
      dataIndex: 'note',
      key: 'note',
    },
  ];

  // --------------------------------------------

  return (
    <>
      <CaseDetailsModal
        is_modal_visible={is_modal_visible}
        setIsModalVisible={setIsModalVisible}
      />
      <Table dataSource={dataSource} columns={cols} />;
    </>
  );
}
