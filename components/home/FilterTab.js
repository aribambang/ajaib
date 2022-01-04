import React from 'react';
import { Select, Input, Button, Form, Row, Col } from 'antd';

const FilterTab = ({ form, onSearch, handleResetFilter, handleGenderFilter }) => {
  return (
    <Form form={form} layout='inline'>
      <Row>
        <Col>
          Search
          <Form.Item name='search'>
            <Input.Search
              placeholder='Search...'
              onSearch={onSearch}
              enterButton
              style={{ width: '200px' }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          Gender
          <Form.Item name='gender' initialValue='all'>
            <Select
              onChange={(v) => {
                handleGenderFilter(v);
              }}
              allowClear
              style={{ width: '200px' }}
            >
              <Select.Option value='all' default>
                All
              </Select.Option>
              <Select.Option value='male'>Male</Select.Option>
              <Select.Option value='female'>Female</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Button style={{ alignSelf: 'end' }} onClick={() => handleResetFilter()}>
          Reset Filter
        </Button>
      </Row>
    </Form>
  );
};

export default FilterTab;
