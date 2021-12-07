import React from 'react';

import Header from './Header';

function Layout({ children, ...props }) {
  return (
    <div className="layout">
      <Header className="" {...props} />
      <main className="">
        <section className="">{children}</section>
      </main>
      <footer>© 2021 NodeApi</footer>
    </div>
  );
}

export default Layout;
