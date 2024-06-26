import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Space } from "antd";
import { UserOutlined, BellOutlined } from "@ant-design/icons";
import { AiOutlineCaretDown } from "react-icons/ai";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./adminDashboard.css";
import { items } from "./dashboardData.jsx";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineCompass,
} from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";

const { Header, Content, Sider } = Layout;

const navSubLinks = [
  {
    key: "2",
    label: "First Item",
  },
  {
    key: "3",
    label: "New Item",
  },
  {
    key: "4",
    label: "Another Item",
  },
];
const Dashboard = () => {
  const navigate = useNavigate();
  const mobileItems = [
    {
      to: "enrollment-journy",
      label: "Enrollment",
      icon: <LuLayoutDashboard size={25} />,
      subnavs: [],
    },
    {
      to: "document-library",
      label: "Documents",
      icon: <AiOutlineInfoCircle size={25} />,
      subnavs: [],
    },
    {
      to: "messaging",
      label: "Messaging",
      icon: <IoMdStats size={25} />,
      subnavs: [],
    },
    {
      to: "student-list",
      label: "Std Record",
      icon: <AiOutlineUser size={25} />,
      subnavs: [
        {
          onClick: () => navigate("/student-record"),
          label: "Record",
          icon: <AiOutlineUser size={1} />,
        },
        {
          onClick: () => navigate("/student-list"),
          label: "List of Students",
          icon: <AiOutlineUser size={1} />,
        },
        {
          onClick: () => navigate("/enrollment-document"),
          label: "Enrollment Documents",
          icon: <AiOutlineUser size={1} />,
        },
        {
          onClick: () => navigate("/sub-documents"),
          label: "Sub Documents",
          icon: <AiOutlineUser size={1} />,
        },
      ],
    },
    {
      to: "campus-content",
      label: "Content",
      icon: <AiOutlineCompass size={25} />,
      subnavs: [],
    },
    {
      to: "screen-8",
      label: "Stats",
      icon: <RxDashboard size={25} />,
      subnavs: [],
    },
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your needs
    };

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout className="university-dashboard">
      {/* Mobile View */}
      {isMobile && (
        <Layout className="site-layout">
          <Header className="dashboard-header sm:px-4 px-2 flex justify-between">
            <div className="flex">
              <div className="flex">
                <div className="flex items-center">
                  <div className="cursor-pointer sm:px-3 px-1">
                    <IoMailUnreadOutline style={{ fontSize: 30 }} />
                  </div>
                  <div className="cursor-pointer px-3">
                    <BellOutlined style={{ fontSize: 30 }} />
                  </div>
                </div>
                <div className="user-icon">
                  <UserOutlined style={{ fontSize: 25 }} />
                </div>
                <div className="admin-text">
                  <div className="admin-name">Dr. Imran Raza</div>
                  <div className="admin-designation">
                    Interim Incharge of IRZ Hospital
                  </div>
                </div>
                <Dropdown
                  className="ml-2"
                  menu={{
                    items: navSubLinks,
                  }}
                >
                  <Link onClick={(e) => e.preventDefault()}>
                    <Space>
                      <AiOutlineCaretDown color="grey" size={20} />
                    </Space>
                  </Link>
                </Dropdown>
              </div>
            </div>
          </Header>
          <Content className="relative w-full mb-40 bg-white">
            <div className="w-[100%]">
              <Outlet />
            </div>
          </Content>
          <div className="fixed bottom-0 left-0 w-full bg-primary border-t text-white border-gray-300 flex justify-around p-3">
            {mobileItems.map((index, item) => {
              if (item.subnavs && item.subnavs.length > 0) {
                // Render sub-menu items
                return (
                  <div className="flex flex-col items-center" key={index}>
                    <Dropdown menu={{ items: item.subnavs }}>
                      <Link onClick={(e) => e.preventDefault()}>
                        <Space>{item.icon}</Space>
                      </Link>
                    </Dropdown>
                  </div>
                );
              } else {
                // Render regular menu items
                return (
                  <div className="flex flex-col items-center" key={index}>
                    <Link to={`/${item.to}`} className="text-white">
                      {item.icon}
                      {/* <div>{item.label}</div> */}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </Layout>
      )}

      {/* Desktop View */}
      {!isMobile && (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider width={260} theme="light">
            <div className=" university-text text-center p-[10.5px]  border-b-[1px]">
              <div className="univristy-name text-[18px] text-primary font-semibold">
                Imran Raza
              </div>
              <div className="text-[10px] text-[#928C8E]">HOSPITAL</div>
            </div>
            <div className="demo-logo-vertical" />
            <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
              {items.map((item) => {
                if (item.subnavs && item.subnavs.length > 0) {
                  // Render sub-menu items
                  return (
                    <Menu.SubMenu
                      key={item.to}
                      icon={item.icon}
                      title={item.label}
                    >
                      {item.subnavs.map((subItem) => (
                        <Menu.Item key={subItem.to} icon={subItem.icon}>
                          <Link to={`/${subItem.to}`}>{subItem.label}</Link>
                        </Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  );
                } else {
                  // Render regular menu items
                  return (
                    <Menu.Item key={item.to} icon={item.icon}>
                      <Link to={`/${item.to}`}>{item.label}</Link>
                    </Menu.Item>
                  );
                }
              })}
            </Menu>
          </Sider>
          <Layout>
            <Header className="dashboard-header sm:px-4 px-2 flex justify-between">
              <div className="flex p-2">
                <FiSearch color="grey" size={26} className="mt-2" />
                <input type="text" placeholder="Search Something....." />
              </div>
              <div className="flex">
                <div className="flex">
                  <div className="flex items-center">
                    {/* <div className='cursor-pointer px-3'>
                                            <IoMailUnreadOutline style={{ fontSize: 30 }} />
                                        </div>
                                        <div className='cursor-pointer px-3 mt-3'>
                                            <BellOutlined style={{ fontSize: 30 }} />
                                        </div> */}
                  </div>
                  <div className="user-icon mt-3">
                    <UserOutlined style={{ fontSize: 25 }} />
                  </div>
                  <div className="admin-text">
                    <div className="admin-name">Dr. Imran Raza</div>
                    <div className="admin-designation">
                      Interim Incharge of IRZ Hospital
                    </div>
                  </div>
                  <Dropdown
                    className="ml-2"
                    menu={{
                      items: navSubLinks,
                    }}
                  >
                    <Link onClick={(e) => e.preventDefault()}>
                      <Space>
                        <AiOutlineCaretDown color="grey" size={20} />
                      </Space>
                    </Link>
                  </Dropdown>
                </div>
              </div>
            </Header>
            <Content className="relative w-[100%] p-[20x]">
              <div className=" bg-white absolute top-0 right-0 bottom-0 left-0 overflow-auto">
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
    </Layout>
  );
};

export default Dashboard;
