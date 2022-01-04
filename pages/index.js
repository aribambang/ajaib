import React, { useEffect, useState } from 'react';
import { Divider, Form } from 'antd';
import { getUsers } from '../store/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import LayoutDashboard from '../components/LayoutDashboard';
import AlertMessage from '../components/AlertMessage';
import FilterTab from '../components/home/FilterTab';
import UsersTable from '../components/home/UsersTable';

export default function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [usersFiltered, setUsersFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const [form] = Form.useForm();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setUsersFiltered(users);
  }, [users]);

  const getData = async () => {
    try {
      setLoading(true);
      await dispatch(getUsers({ pagination }));
      setLoading(false);
    } catch (err) {
      AlertMessage('Error', err.message);
      setLoading(false);
    }
  };

  const onSearch = (v) => {
    if (!v) setUsersFiltered(users);
    else {
      const searched = users.filter((obj) => {
        let fullName = (obj.name['first'] + ' ' + obj.name['last']).toLowerCase();
        return fullName.includes(v.toLowerCase());
      });
      setUsersFiltered(searched);
    }
  };

  const handleResetFilter = () => {
    setUsersFiltered(users);
    form.resetFields();
  };

  const handleGenderFilter = (value) => {
    if (value === 'all') {
      setUsersFiltered(users);
    } else {
      const filtered = [];
      users.map((u) => {
        if (u.gender === value) {
          filtered.push(u);
        }
      });
      setUsersFiltered(filtered);
    }
  };

  return (
    <LayoutDashboard>
      <h1>Example With Search and Filter</h1>
      <FilterTab
        form={form}
        onSearch={onSearch}
        handleResetFilter={handleResetFilter}
        handleGenderFilter={handleGenderFilter}
      />
      <Divider />
      <UsersTable
        loading={loading}
        data={usersFiltered}
        pagination={pagination}
        setPagination={setPagination}
      />
    </LayoutDashboard>
  );
}
