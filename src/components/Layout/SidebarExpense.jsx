import React, { useEffect, useState } from "react";
import { Sidebar, TextInput } from "flowbite-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";

const ExampleSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access the current path
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(location.pathname); // Set the current path
  }, [location.pathname]);

  // Helper function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Sidebar aria-label=" Sidebar with multi-level dropdown example">
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          <form className="pb-3 md:hidden">
            <TextInput
              icon={HiSearch}
              type="search"
              placeholder="Search"
              required
              size={0}
            />
          </form>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => handleNavigation("/api/dashboard")}
                icon={HiChartPie}
                className={
                  "/api/dashboard" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""
                }
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => handleNavigation("/e-commerce/products")}
                icon={HiShoppingBag}
                className={
                  "/e-commerce/products" === currentPage
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }
              >
                Products
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => handleNavigation("/users/list")}
                icon={HiUsers}
                className={
                  "/users/list" === currentPage
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }
              >
                Users list
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => handleNavigation("/authentication/sign-in")}
                icon={HiLogin}
              >
                Sign in
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => handleNavigation("/authentication/sign-up")}
                icon={HiPencil}
              >
                Sign up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="https://github.com/themesberg/flowbite-react/"
                icon={HiClipboard}
              >
                Docs
              </Sidebar.Item>
              <Sidebar.Item
                href="https://flowbite-react.com/"
                icon={HiCollection}
              >
                Components
              </Sidebar.Item>
              <Sidebar.Item
                href="https://github.com/themesberg/flowbite-react/issues"
                icon={HiInformationCircle}
              >
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
};

export default ExampleSidebar;
