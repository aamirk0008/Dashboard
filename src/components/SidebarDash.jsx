import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import logoImg from "../assets/logo.webp";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const SidebarDash = () => {
  const location = useLocation();

  // Function to check if a path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };
  return (
    <div>
      <Sidebar
        aria-label="Default sidebar example"
        className="bg-red-400 border-r-2 border-t-2 border-gray-400"
      >
        <Sidebar.Logo href="/" img={logoImg} imgAlt="Nyouta Logo">
          Dashboard Temp
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin/dashboard"
              className={`hover:translate-x-1 duration-300 ease-out ${
                isActivePath("/admin/dashboard")
                  ? "bg-black font-bold border-r-4 border-red-500"
                  : ""
              }`}
              icon={HiChartPie}
            >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/add-product"
              className={`hover:translate-x-1 duration-300 ease-out ${
                isActivePath("/admin/dashboard/add-product")
                  ? "bg-black font-bold border-r-4 border-red-500"
                  : ""
              }`}
              icon={HiShoppingBag}
            >
              Add Product
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              className={`hover:translate-x-1 duration-300 ease-out ${
                isActivePath('/inbox') 
                  ? 'bg-black font-bold border-r-4 border-red-500' 
                  : ''
              }`}
              icon={HiInbox}
              label="3"
            >
              Inbox
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              className={`hover:translate-x-1 duration-300 ease-out ${
                isActivePath('/users') 
                  ? 'bg-black font-bold border-r-4 border-red-500' 
                  : ''
              }`}
              icon={HiUser}
            >
              Users
            </Sidebar.Item>

            <Sidebar.Item href="#" className={`${
              isActivePath('/signin') 
                ? 'bg-black font-bold border-r-4 border-red-500' 
                : ''
            }`} icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SidebarDash;
