import React, { useState, useContext, useEffect } from 'react';
import { Layout, Row, Dropdown } from 'antd';
import Breadcrumbs from './Breadcrumbs';
import Head from 'next/head';
import styles from './LayoutDashboard.module.css';

const LayoutDashboard = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <title>Web Engineer Test - Ajaib</title>
        <meta name='description' content='Web Engineer Test - Ajaib' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout.Content
        className={styles['site-layout-background']}
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Breadcrumbs />
        {children}
      </Layout.Content>
    </Layout>
  );
};

export default LayoutDashboard;
