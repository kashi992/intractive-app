import React , { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './index.css'
import DashboardIcon from '../../assets/images/DashboardIcon.js'
import HomeIcon from '../../assets/images/HomeIcon.js'

const Dashboard = () => {
 const [visitorCount, setVisitorCount] = useState(0);
  const [visitorLogs, setVisitorLogs] = useState([]);
  const [error, setError] = useState(null); // Error state for handling fetch errors

useEffect(() => {
  fetch("https://6e5zpkl6352moh5kzqfuyhn6la0zxjkv.lambda-url.us-east-1.on.aws/")
    .then(res => res.json())
    .then(data => {
      setVisitorCount(data.count);
      setVisitorLogs(data.logs);
    })
    .catch(error => console.error("Error fetching visitors:", error));
}, []);


  return (
    <div className="dashboardWrap flex w-full">
      <div className="xl:block hidden">
        <nav aria-label="Sidebar with multi-level dropdown example"
          className="h-full fixed menuSidebar bg-white left-0">
          <div className="bg-white dark:bg-transparent rounded-none">
            <h2 className="px-6 py-4 flex items-center sidebarlogo font-bold">UGL Solution</h2>
            <div className="h-[calc(100vh_-_0px)] simplebar-scrollable-y">
              <nav
                className="mt-6 sidebar-nav list-none px-5 flex flex-col gap-4">
                <li>
                  <Link className="flex bg-[#635BFF] gap-3 items-center shadow-lg rounded-xl px-4 py-3 text-white">
                    <DashboardIcon className="w-[18px] h-[18px]" iconClr="#fff" />  Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-3 items-center px-4 py-3">
                    <HomeIcon className="w-[18px] h-[18px]" iconClr="#000" />  Home
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </nav>
      </div>
      <div className="page-wrapper-sub flex flex-col w-full dark:bg-darkgray">
        <header className="sticky top-0 z-[5] bg-white">
          <nav className="dark:border-gray-700 rounded-none bg-transparent dark:bg-transparent py-6 px-4">
            <div className="mx-auto flex flex-wrap items-center justify-end">
              logo
            </div>
          </nav>
        </header>
        <div aria-modal="true" aria-describedby="drawer-dialog-:rd:" role="dialog" tabindex="-1"
          data-testid="flowbite-drawer"
          className="fixed z-40 overflow-y-auto bg-white dark:bg-darkgray p-0 transition-transform left-0 top-0 h-screen -translate-x-full w-130">
          <div data-testid="flowbite-drawer-items" className="">
            <div>
              <nav aria-label="Sidebar with multi-level dropdown example"
                className="h-full w-64 fixed menu-sidebar pt-0 bg-white dark:bg-darkgray transition-all">
                <div className="bg-white dark:bg-transparent rounded-none">
                  <div className="px-5 py-4 pb-7 flex items-center sidebarlogo"><a href="#/"
                    data-discover="true"><img alt="logo" className="block"
                      src="/MatDash/assets/logo-BFjfueis.svg" /></a></div>
                  <div data-simplebar="init" className="h-[calc(100vh_-_242px)] simplebar-scrollable-y">
                    <div className="simplebar-wrapper" >
                      <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                      </div>
                      <div className="simplebar-mask">
                        <div className="simplebar-offset" >
                          <div className="simplebar-content-wrapper" tabindex="0" role="region"
                            aria-label="scrollable content"
                          >
                            <div className="simplebar-content" >
                              <div className="px-5 mt-2" data-testid="flowbite-sidebar-items">
                                <ul data-testid="flowbite-sidebar-item-group"
                                  className="mt-4 space-y-2 border-t border-ld pt-4 first:mt-0 first:border-t-0 first:pt-0 sidebar-nav sidebar-nav hide-menu">
                                  <div className="caption">
                                    <h5
                                      className="text-link dark:text-white/70 caption font-semibold leading-6 tracking-widest text-xs pb-2 uppercase">
                                      HOME</h5>
                                    <li className=""><a
                                      aria-labelledby="flowbite-sidebar-item-:re:"
                                      className="flex items-center justify-center px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal dark:text-white text-white bg-primary rounded-xl hover:text-white hover:bg-primary dark:hover:text-white shadow-btnshdw active"
                                      href="#/" data-discover="true"><span
                                        data-testid="flowbite-sidebar-item-content"
                                        id="flowbite-sidebar-item-:re:"
                                        className="flex-1 whitespace-nowrap px-0"><span
                                          className="flex gap-3 align-center items-center">
                                          <span
                                            className="max-w-36 overflow-hidden">Dashboard</span></span></span></a>
                                    </li>
                                  </div>
                                  <div className="caption">
                                    <h5
                                      className="text-link dark:text-white/70 caption font-semibold leading-6 tracking-widest text-xs pb-2 uppercase">
                                      UTILITIES</h5>
                                    <li className=""><a
                                      aria-labelledby="flowbite-sidebar-item-:rf:"
                                      className="flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal hover:text-primary dark:text-white dark:hover:text-primary text-link bg-transparent group/link"
                                      href="#/ui/typography"
                                      data-discover="true"><span
                                        data-testid="flowbite-sidebar-item-content"
                                        id="flowbite-sidebar-item-:rf:"
                                        className="flex-1 whitespace-nowrap px-0"><span
                                          className="flex gap-3 align-center items-center">
                                          <span
                                            className="max-w-36 overflow-hidden">Typography</span></span></span></a>
                                    </li>
                                    <li className=""><a
                                      aria-labelledby="flowbite-sidebar-item-:rg:"
                                      className="flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal hover:text-primary dark:text-white dark:hover:text-primary text-link bg-transparent group/link"
                                      href="#/ui/table" data-discover="true"><span
                                        data-testid="flowbite-sidebar-item-content"
                                        id="flowbite-sidebar-item-:rg:"
                                        className="flex-1 whitespace-nowrap px-0"><span
                                          className="flex gap-3 align-center items-center">
                                          <span
                                            className="max-w-36 overflow-hidden">Table</span></span></span></a>
                                    </li>
                                    <li className=""><a
                                      aria-labelledby="flowbite-sidebar-item-:rh:"
                                      className="flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal hover:text-primary dark:text-white dark:hover:text-primary text-link bg-transparent group/link"
                                      href="#/ui/form" data-discover="true"><span
                                        data-testid="flowbite-sidebar-item-content"
                                        id="flowbite-sidebar-item-:rh:"
                                        className="flex-1 whitespace-nowrap px-0"><span
                                          className="flex gap-3 align-center items-center">
                                          <span
                                            className="max-w-36 overflow-hidden">Form</span></span></span></a>
                                    </li>
                                    <li className=""><a
                                      aria-labelledby="flowbite-sidebar-item-:ri:"
                                      className="flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal hover:text-primary dark:text-white dark:hover:text-primary text-link bg-transparent group/link"
                                      href="#/ui/shadow"
                                      data-discover="true"><span
                                        data-testid="flowbite-sidebar-item-content"
                                        id="flowbite-sidebar-item-:ri:"
                                        className="flex-1 whitespace-nowrap px-0"><span
                                          className="flex gap-3 align-center items-center">
                                          <span
                                            className="max-w-36 overflow-hidden">Shadow</span></span></span></a>
                                    </li>
                                  </div>
                                  <div className="caption">
                                    <h5
                                      className="text-link dark:text-white/70 caption font-semibold leading-6 tracking-widest text-xs pb-2 uppercase">
                                      AUTH</h5>
                                    <li className=""><a
                                      aria-labelledby="flowbite-sidebar-item-:rj:"
                                      className="flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal hover:text-primary dark:text-white dark:hover:text-primary text-link bg-transparent group/link"
                                      href="#/auth/login"
                                      data-discover="true"><span
                                        data-testid="flowbite-sidebar-item-content"
                                        id="flowbite-sidebar-item-:rj:"
                                        className="flex-1 whitespace-nowrap px-0"><span
                                          className="flex gap-3 align-center items-center">
                                          <span
                                            className="max-w-36 overflow-hidden">Login</span></span></span></a>
                                    </li>
                                    <li className=""><a
                                      aria-labelledby="flowbite-sidebar-item-:rk:"
                                      className="flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal hover:text-primary dark:text-white dark:hover:text-primary text-link bg-transparent group/link"
                                      href="#/auth/register"
                                      data-discover="true"><span
                                        data-testid="flowbite-sidebar-item-content"
                                        id="flowbite-sidebar-item-:rk:"
                                        className="flex-1 whitespace-nowrap px-0"><span
                                          className="flex gap-3 align-center items-center">
                                          <span
                                            className="max-w-36 overflow-hidden">Register</span></span></span></a>
                                    </li>
                                  </div>
                                  <div className="caption">
                                    <h5
                                      className="text-link dark:text-white/70 caption font-semibold leading-6 tracking-widest text-xs pb-2 uppercase">
                                      EXTRA</h5>
                                    <li className=""><a
                                      aria-labelledby="flowbite-sidebar-item-:rl:"
                                      className="flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal hover:text-primary dark:text-white dark:hover:text-primary text-link bg-transparent group/link"
                                      href="#/icons/solar"
                                      data-discover="true"><span
                                        data-testid="flowbite-sidebar-item-content"
                                        id="flowbite-sidebar-item-:rl:"
                                        className="flex-1 whitespace-nowrap px-0"><span
                                          className="flex gap-3 align-center items-center">
                                          <span
                                            className="max-w-36 overflow-hidden">Icons</span></span></span></a>
                                    </li>
                                    <li className=""><a
                                      aria-labelledby="flowbite-sidebar-item-:rm:"
                                      className="flex items-center justify-center rounded-lg px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal hover:text-primary dark:text-white dark:hover:text-primary text-link bg-transparent group/link"
                                      href="#/sample-page"
                                      data-discover="true"><span
                                        data-testid="flowbite-sidebar-item-content"
                                        id="flowbite-sidebar-item-:rm:"
                                        className="flex-1 whitespace-nowrap px-0"><span
                                          className="flex gap-3 align-center items-center">
                                          <span
                                            className="max-w-36 overflow-hidden">Sample
                                            Page</span></span></span></a>
                                    </li>
                                  </div>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="simplebar-placeholder" ></div>
                    </div>
                    <div className="simplebar-track simplebar-horizontal" >
                      <div className="simplebar-scrollbar" ></div>
                    </div>
                    <div className="simplebar-track simplebar-vertical" >
                      <div className="simplebar-scrollbar"
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-lightgray dark:bg-dark  h-full rounded-[20px] bg-[#F4F7FB]">
          <div className="w-full">
            <div className="container py-8">
              <div className='grid'>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="flex items-center gap-4 mb-8">
            <h1>Total Visitors: {visitorCount}</h1>
            {/* Display error message if fetch failed */}
                    {error && <p className="text-red-500">{error}</p>}
                 <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>IP</th>
            <th>City</th>
            <th>Region</th>
            <th>Country</th>
            <th>Visited At</th>
          </tr>
        </thead>
        <tbody>
          {visitorLogs.map((log, i) => (
            <tr key={i}>
              <td>{log.ip}</td>
              <td>{log.city}</td>
              <td>{log.region}</td>
              <td>{log.country}</td>
              <td>{new Date(log.time).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard
