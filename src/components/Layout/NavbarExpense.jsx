import React, { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RiMenuFold4Line } from "react-icons/ri";
import { RiMenuFold3Line2 } from "react-icons/ri";


const NavbarExpense = ({toggleSidebar}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="border-b border-gray-200">
      
      <Navbar fluid rounded className="">
      <Navbar.Brand >
{
  sidebarOpen?(
    <RiMenuFold3Line2 className="w-6 mr-3 h-6 sm:h-9"
    onClick={() => {
     toggleSidebar(); 
     handleSidebar(); 
   }}
   />

  ):(
<RiMenuFold4Line className="w-6 mr-3 h-6 sm:h-9"
             onClick={() => {
              toggleSidebar(); 
              handleSidebar(); 
            }} />

  )
}

          
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Expense Tracker
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          {/* <Navbar.Toggle /> */}
        </div>
        {/* <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default NavbarExpense;
