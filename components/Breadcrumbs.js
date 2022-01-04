import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Breadcrumb } from 'antd';

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }
  return (
    <Breadcrumb style={{ marginBottom: 10 }}>
      <Breadcrumb.Item>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </Breadcrumb.Item>
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <Breadcrumb.Item key={i}>
            <Link href={breadcrumb.href}>
              <a>
                {breadcrumb &&
                  breadcrumb.breadcrumb &&
                  breadcrumb.breadcrumb[0].toUpperCase() + breadcrumb?.breadcrumb.slice(1)}
              </a>
            </Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
