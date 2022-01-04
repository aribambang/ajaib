import React from 'react';
import { Table } from 'antd';
import moment from 'moment';

const UsersTable = ({ loading, data, pagination, setPagination }) => {
  const columns = [
    {
      title: 'Username',
      dataIndex: 'login',
      render: (text) => text['username'],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => `${text['first']} ${text['last']}`,
      sorter: (a, b) =>
        `${a.name['first']} ${a.name['last']}`.localeCompare(
          `${b.name['first']} ${b.name['last']}`,
        ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: 'Registered Date',
      dataIndex: 'registered',
      render: (text) => `${moment(text['date']).format('DD-MM-yyyy HH:mm')}`,
      sorter: (a, b) => a.registered['date'].localeCompare(b.registered['date']),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    setPagination(pagination);
  }

  return (
    <Table
      loading={loading}
      rowKey={(obj) => obj.email}
      dataSource={data}
      columns={columns}
      pagination={pagination}
      onChange={onChange}
    />
  );
};

export default UsersTable;
