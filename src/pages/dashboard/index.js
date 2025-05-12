import React , { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './index.css'
import DashboardIcon from '../../assets/images/DashboardIcon.js'
import HomeIcon from '../../assets/images/HomeIcon.js'

const Dashboard = () => {
 const [visitorCount, setVisitorCount] = useState(0);
  const [visitorLogs, setVisitorLogs] = useState([]);

  useEffect(() => {
    fetch("https://intractive-app-backend.vercel.app/get-visitors")
      .then(res => res.json())
      .then(data => {
        setVisitorCount(data.count);
        setVisitorLogs(data.logs);
      });
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
              {/* <div className="grid grid-cols-12 gap-30">
                <div className="lg:col-span-8 col-span-12">
                  <div
                    className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
                    <div className="flex justify-between items-center">
                      <h5 className="card-title">Revenue Forecast</h5>
                      <div className="flex select-md">
                        <div className="relative w-full"><select
                          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                          id="periods" required="">
                          <option value="This Week">This Week</option>
                          <option value="April 2024">April 2024</option>
                          <option value="May 2024">May 2024</option>
                          <option value="June 2024">June 2024</option>
                        </select></div>
                      </div>
                    </div>
                    <div className="-ms-4 -me-3 mt-2">
                      <div >
                        <div id="apexchartsuor554r1"
                          className="apexcharts-canvas apexchartsuor554r1 apexcharts-theme-light"
                        >
                          <div className="apexcharts-tooltip apexcharts-theme-dark">
                            <div className="apexcharts-tooltip-title"
                            >
                            </div>
                            <div className="apexcharts-tooltip-series-group" ><span
                              className="apexcharts-tooltip-marker"
                            ></span>
                              <div className="apexcharts-tooltip-text"
                              >
                                <div className="apexcharts-tooltip-y-group"><span
                                  className="apexcharts-tooltip-text-y-label"></span><span
                                    className="apexcharts-tooltip-text-y-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-goals-group"><span
                                  className="apexcharts-tooltip-text-goals-label"></span><span
                                    className="apexcharts-tooltip-text-goals-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-z-group"><span
                                  className="apexcharts-tooltip-text-z-label"></span><span
                                    className="apexcharts-tooltip-text-z-value"></span>
                                </div>
                              </div>
                            </div>
                            <div className="apexcharts-tooltip-series-group" ><span
                              className="apexcharts-tooltip-marker"
                            ></span>
                              <div className="apexcharts-tooltip-text"
                              >
                                <div className="apexcharts-tooltip-y-group"><span
                                  className="apexcharts-tooltip-text-y-label"></span><span
                                    className="apexcharts-tooltip-text-y-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-goals-group"><span
                                  className="apexcharts-tooltip-text-goals-label"></span><span
                                    className="apexcharts-tooltip-text-goals-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-z-group"><span
                                  className="apexcharts-tooltip-text-z-label"></span><span
                                    className="apexcharts-tooltip-text-z-value"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                            <div className="apexcharts-yaxistooltip-text"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 col-span-12">
                  <div className="grid grid-cols-12 h-full items-stretch">
                    <div className="col-span-12 mb-30">
                      <div className="bg-white rounded-xl shadow-md p-8">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="bg-lightsecondary text-secondary p-3 rounded-md">
                          </div>
                          <p className="text-lg text-dark font-semibold">New Customers</p>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm text-dark">New goals</p>
                          <p className="text-sm text-dark">83%</p>
                        </div>
                        <div id=":rn:" aria-label="progressbar" aria-valuenow="83"
                          role="progressbar">
                          <div
                            className="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-1.5">
                            <div className="space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 bg-secondary h-1.5"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="bg-white rounded-xl shadow-md p-8">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="bg-lighterror text-error p-3 rounded-md">
                          </div>
                          <p className="text-lg font-semibold text-dark">Total Income</p>
                        </div>
                        <div className="flex">
                          <div className="flex-1">
                            <p className="text-xl text-dark font-medium mb-2">$680</p><span
                              className="flex h-fit w-fit items-center font-medium p-1 text-xs rounded-sm px-2.5 py-1 bg-lightsuccess text-success"
                              data-testid="flowbite-badge"><span>+18%</span></span>
                            <p className="text-success text-xs"></p>
                          </div>
                          <div className="rounded-bars flex-1 md:ps-7">
                            <div >
                              <div id="apexchartstotal-income"
                                className="apexcharts-canvas apexchartstotal-income apexcharts-theme-light"
                              >
                                <div className="apexcharts-tooltip apexcharts-theme-dark">
                                  <div className="apexcharts-tooltip-series-group"
                                  ><span
                                    className="apexcharts-tooltip-marker"
                                  ></span>
                                    <div className="apexcharts-tooltip-text">
                                      <div className="apexcharts-tooltip-y-group"><span
                                        className="apexcharts-tooltip-text-y-label"></span><span
                                          className="apexcharts-tooltip-text-y-value"></span>
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span
                                          className="apexcharts-tooltip-text-goals-label"></span><span
                                            className="apexcharts-tooltip-text-goals-value"></span>
                                      </div>
                                      <div className="apexcharts-tooltip-z-group"><span
                                        className="apexcharts-tooltip-text-z-label"></span><span
                                          className="apexcharts-tooltip-text-z-value"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                                  <div className="apexcharts-yaxistooltip-text"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 col-span-12">
                  <div
                    className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray pt-6 px-0 relative w-full break-words">
                    <div className="px-6">
                      <h5 className="card-title mb-6">Revenue by Product</h5>
                    </div>
                    <div data-simplebar="init" className="max-h-[450px]">
                      <div className="simplebar-wrapper" >
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer"></div>
                        </div>
                        <div className="simplebar-mask">
                          <div className="simplebar-offset" >
                            <div className="simplebar-content-wrapper" tabindex="0" role="region"
                              aria-label="scrollable content">
                              <div className="simplebar-content" >
                                <div className="overflow-x-auto">
                                  <div data-testid="table-element" className="relative">
                                    <div
                                      className="absolute left-0 top-0 -z-10 h-full w-full bg-transparent drop-shadow-md">
                                    </div>
                                    <table
                                      className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                                      <thead
                                        className="group/head text-sm font-medium capitalize text-dark dark:text-white border-b border-ld">
                                        <tr>
                                          <th
                                            className="font-semibold dark:bg-transparent p-6">
                                            Assigned</th>
                                          <th
                                            className="font-semibold px-4 py-4 dark:bg-transparent">
                                            Progress</th>
                                          <th
                                            className="font-semibold px-4 py-4 dark:bg-transparent">
                                            Priority</th>
                                          <th
                                            className="font-semibold px-4 py-4 dark:bg-transparent">
                                            Budget</th>
                                        </tr>
                                      </thead>
                                      <tbody
                                        className="group/body divide-y divide-border dark:divide-darkborder">
                                        <tr data-testid="table-row-element"
                                          className="group/row bg-hover dark:bg-transparent">
                                          <td
                                            className="px-4 py-4 dark:bg-transparent whitespace-nowrap ps-6">
                                            <div
                                              className="flex gap-3 items-center">
                                              <div
                                                className="truncat line-clamp-2 sm:text-wrap max-w-56">
                                                <h6 className="text-sm">Minecraf
                                                  App</h6>
                                                <p className="text-xs ">Jason
                                                  Roy</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <div className="me-5">
                                              <p className="text-base">73.2%</p>
                                            </div>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <span
                                              className="flex h-fit w-fit items-center font-medium p-1 text-xs rounded-sm px-2.5 py-1 bg-lightsuccess text-success"
                                              data-testid="flowbite-badge"><span>Low</span></span>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <h4>$3.5k</h4>
                                          </td>
                                        </tr>
                                        <tr data-testid="table-row-element"
                                          className="group/row bg-hover dark:bg-transparent">
                                          <td
                                            className="px-4 py-4 dark:bg-transparent whitespace-nowrap ps-6">
                                            <div
                                              className="flex gap-3 items-center">
                                              <div
                                                className="truncat line-clamp-2 sm:text-wrap max-w-56">
                                                <h6 className="text-sm">Web App
                                                  Project</h6>
                                                <p className="text-xs ">Mathew
                                                  Flintoff</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <div className="me-5">
                                              <p className="text-base">73.2%</p>
                                            </div>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <span
                                              className="flex h-fit w-fit items-center font-medium p-1 text-xs rounded-sm px-2.5 py-1 bg-lightwarning text-warning"
                                              data-testid="flowbite-badge"><span>Medium</span></span>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <h4>$3.5k</h4>
                                          </td>
                                        </tr>
                                        <tr data-testid="table-row-element"
                                          className="group/row bg-hover dark:bg-transparent">
                                          <td
                                            className="px-4 py-4 dark:bg-transparent whitespace-nowrap ps-6">
                                            <div
                                              className="flex gap-3 items-center">
                                              <div
                                                className="truncat line-clamp-2 sm:text-wrap max-w-56">
                                                <h6 className="text-sm">
                                                  Modernize Dashboard</h6>
                                                <p className="text-xs ">Anil
                                                  Kumar</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <div className="me-5">
                                              <p className="text-base">73.2%</p>
                                            </div>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <span
                                              className="flex h-fit w-fit items-center font-medium p-1 text-xs rounded-sm px-2.5 py-1 bg-lightsecondary text-secondary"
                                              data-testid="flowbite-badge"><span>Very
                                                High</span></span></td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <h4>$3.5k</h4>
                                          </td>
                                        </tr>
                                        <tr data-testid="table-row-element"
                                          className="group/row bg-hover dark:bg-transparent">
                                          <td
                                            className="px-4 py-4 dark:bg-transparent whitespace-nowrap ps-6">
                                            <div
                                              className="flex gap-3 items-center">
                                              <div
                                                className="truncat line-clamp-2 sm:text-wrap max-w-56">
                                                <h6 className="text-sm">
                                                  Dashboard Co</h6>
                                                <p className="text-xs ">George
                                                  Cruize</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <div className="me-5">
                                              <p className="text-base">73.2%</p>
                                            </div>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <span
                                              className="flex h-fit w-fit items-center font-medium p-1 text-xs rounded-sm px-2.5 py-1 bg-lighterror text-error"
                                              data-testid="flowbite-badge"><span>High</span></span>
                                          </td>
                                          <td
                                            className="px-4 py-4 dark:bg-transparent">
                                            <h4>$3.5k</h4>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="simplebar-placeholder">
                        </div>
                      </div>
                      <div className="simplebar-track simplebar-horizontal" >
                        <div className="simplebar-scrollbar" ></div>
                      </div>
                      <div className="simplebar-track simplebar-vertical" >
                        <div className="simplebar-scrollbar"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 col-span-12 flex">
                  <div
                    className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
                    <h5 className="card-title mb-6">Daily activities</h5>
                    <div className="flex flex-col mt-2">
                      <ul>
                        <li>
                          <div className="flex gap-4 min-h-16">
                            <div className="">
                              <p>09:46</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="rounded-full bg-primary p-1.5 w-fit"></div>
                              <div className="h-full w-px bg-border"></div>
                            </div>
                            <div className="">
                              <p className="text-dark text-start">Payment received from John Doe
                                of $385.90</p><a className="text-blue-700" href="#/"
                                  data-discover="true"></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex gap-4 min-h-16">
                            <div className="">
                              <p>09:46</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="rounded-full bg-warning p-1.5 w-fit"></div>
                              <div className="h-full w-px bg-border"></div>
                            </div>
                            <div className="">
                              <p className="text-dark text-start">New sale recorded</p><a
                                className="text-blue-700" href="#/"
                                data-discover="true">#ML-3467</a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex gap-4 min-h-16">
                            <div className="">
                              <p>09:46</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="rounded-full bg-warning p-1.5 w-fit"></div>
                              <div className="h-full w-px bg-border"></div>
                            </div>
                            <div className="">
                              <p className="text-dark text-start">Payment was made of $64.95 to
                                Michael</p><a className="text-blue-700" href="#/"
                                  data-discover="true"></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex gap-4 min-h-16">
                            <div className="">
                              <p>09:46</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="rounded-full bg-secondary p-1.5 w-fit"></div>
                              <div className="h-full w-px bg-border"></div>
                            </div>
                            <div className="">
                              <p className="text-dark text-start">New sale recorded</p><a
                                className="text-blue-700" href="#/"
                                data-discover="true">#ML-3467</a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex gap-4 min-h-16">
                            <div className="">
                              <p>09:46</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="rounded-full bg-error p-1.5 w-fit"></div>
                              <div className="h-full w-px bg-border"></div>
                            </div>
                            <div className="">
                              <p className="text-dark text-start">Project meeting</p><a
                                className="text-blue-700" href="#/" data-discover="true"></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex gap-4 min-h-16">
                            <div className="">
                              <p>09:46</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="rounded-full bg-primary p-1.5 w-fit"></div>
                              <div className="undefined"></div>
                            </div>
                            <div className="">
                              <p className="text-dark text-start">Payment received from John Doe
                                of $385.90</p><a className="text-blue-700" href="#/"
                                  data-discover="true"></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-12 gap-30">
                    <div className="lg:col-span-4 col-span-12"><a className="group" href="#/"
                      data-discover="true">
                      <div
                        className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-0 relative w-full break-words overflow-hidden">
                        <div className="relative"><img alt="matdash"
                          src="/MatDash/assets/blog-img1-7d3AnRTi.jpg" /><span
                            className="flex h-fit w-fit items-center dark:bg-darkmuted text-dark dark:text-white p-1 text-xs px-2.5 py-1 absolute bottom-5 end-5 font-semibold rounded-sm bg-muted"
                            data-testid="flowbite-badge"><span>2 min Read</span></span>
                        </div>
                        <div className="px-6 pb-6"><img
                          className="h-10 w-10 rounded-full -mt-7 relative z-1" alt="user"
                          src="/MatDash/assets/user-2-Co9mMIqW.jpg" /><span
                            className="flex h-fit w-fit items-center font-medium bg-muted dark:bg-darkmuted text-dark dark:text-white p-1 text-xs rounded-sm px-2.5 py-1 mt-6"
                            data-testid="flowbite-badge"><span>Social</span></span>
                          <h5 className="text-lg my-6 group-hover:text-primary line-clamp-2">As
                            yen tumbles, gadget-loving Japan goes for secondhand iPhones
                          </h5>
                          <div className="flex">
                            <div className="flex gap-2 me-6 items-center">
                              <span className="text-sm text-darklink">9,125</span></div>
                            <div className="flex gap-2 items-center">
                              <span className="text-sm text-darklink">9,125</span></div>
                            <div className="flex gap-1 items-center ms-auto">
                              <span className="text-sm text-darklink">Mon, Dec
                                19</span></div>
                          </div>
                        </div>
                      </div>
                    </a></div>
                    <div className="lg:col-span-4 col-span-12"><a className="group" href="#/"
                      data-discover="true">
                      <div
                        className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-0 relative w-full break-words overflow-hidden">
                        <div className="relative"><img alt="matdash"
                          src="/MatDash/assets/blog-img2-D-kU9kDk.jpg" /><span
                            className="flex h-fit w-fit items-center dark:bg-darkmuted text-dark dark:text-white p-1 text-xs px-2.5 py-1 absolute bottom-5 end-5 font-semibold rounded-sm bg-muted"
                            data-testid="flowbite-badge"><span>2 min Read</span></span>
                        </div>
                        <div className="px-6 pb-6"><img
                          className="h-10 w-10 rounded-full -mt-7 relative z-1" alt="user"
                          src="/MatDash/assets/user-2-Co9mMIqW.jpg" /><span
                            className="flex h-fit w-fit items-center font-medium bg-muted dark:bg-darkmuted text-dark dark:text-white p-1 text-xs rounded-sm px-2.5 py-1 mt-6"
                            data-testid="flowbite-badge"><span>Gadget</span></span>
                          <h5 className="text-lg my-6 group-hover:text-primary line-clamp-2">Intel
                            loses bid to revive antitrust case against patent foe Fortress
                          </h5>
                          <div className="flex">
                            <div className="flex gap-2 me-6 items-center">
                              <span className="text-sm text-darklink">4,150</span></div>
                            <div className="flex gap-2 items-center">
                              <span className="text-sm text-darklink">4,150</span></div>
                            <div className="flex gap-1 items-center ms-auto">
                              <span className="text-sm text-darklink">Sun, Dec
                                18</span></div>
                          </div>
                        </div>
                      </div>
                    </a></div>
                    <div className="lg:col-span-4 col-span-12"><a className="group" href="#/"
                      data-discover="true">
                      <div
                        className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-0 relative w-full break-words overflow-hidden">
                        <div className="relative"><img alt="matdash"
                          src="/MatDash/assets/blog-img3-CDxvw-yK.jpg" /><span
                            className="flex h-fit w-fit items-center dark:bg-darkmuted text-dark dark:text-white p-1 text-xs px-2.5 py-1 absolute bottom-5 end-5 font-semibold rounded-sm bg-muted"
                            data-testid="flowbite-badge"><span>2 min Read</span></span>
                        </div>
                        <div className="px-6 pb-6"><img
                          className="h-10 w-10 rounded-full -mt-7 relative z-1" alt="user"
                          src="/MatDash/assets/user-3-L8S66gD0.jpg" /><span
                            className="flex h-fit w-fit items-center font-medium bg-muted dark:bg-darkmuted text-dark dark:text-white p-1 text-xs rounded-sm px-2.5 py-1 mt-6"
                            data-testid="flowbite-badge"><span>Health</span></span>
                          <h5 className="text-lg my-6 group-hover:text-primary line-clamp-2">COVID
                            outbreak deepens as more lockdowns loom in China</h5>
                          <div className="flex">
                            <div className="flex gap-2 me-6 items-center">
                              <span className="text-sm text-darklink">9,480</span></div>
                            <div className="flex gap-2 items-center">
                              <span className="text-sm text-darklink">9,480</span></div>
                            <div className="flex gap-1 items-center ms-auto">
                              <span className="text-sm text-darklink">Sat, Dec
                                17</span></div>
                          </div>
                        </div>
                      </div>
                    </a></div>
                  </div>
                </div>
                <div className="flex justify-center align-middle gap-2 flex-wrap col-span-12 text-center">
                  <p className="text-base">Design and Developed by <a
                    className="pl-1 text-primary underline decoration-primary"
                    href="https://adminmart.com/" target="_blank">adminmart.com</a></p>
                  <p className="text-base">Distributed by<a
                    className="pl-1 text-primary underline decoration-primary"
                    href="https://themewagon.com/" target="_blank">ThemeWagon</a></p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard
