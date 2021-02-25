import Head from 'next/head';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Oswald&display=swap" rel="stylesheet" />
    </Head>
    <div id="wrapper">
      {children}
    </div>
  </div>
);

export default Layout;
