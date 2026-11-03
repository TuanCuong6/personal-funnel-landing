import { Outlet } from 'react-router-dom';
import Header from './Header';
import PreFooter from './PreFooter';
import Footer from './Footer';

function Layout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
}

export default Layout;
