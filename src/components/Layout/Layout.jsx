import { useState } from 'react';
import NavbarExpense from './NavbarExpense';
import SidebarExpense from './SidebarExpense';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarOption = () =>{ setSidebarOpen(!sidebarOpen); console.log(sidebarOpen)}
  return (
    <div className="flex h-screen flex-col dark:bg-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 z-10 w-full">
        <NavbarExpense  toggleSidebar={toggleSidebarOption}/>
      </header>
    
      {/* Sidebar and Main Content */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`shadow-lg transform transition-transform duration-300 
           ${sidebarOpen? "translate-x-0": "-translate-x-full"} fixed top-13 left-0 z-20 h-full w-64`}>
          <SidebarExpense />
        </aside>

        {/* Main Content */}
        <main className={` flex-1 transform transition-transform duration-300 ${sidebarOpen? 'lg:ml-64': ''}  p-4 overflow-y-auto`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
