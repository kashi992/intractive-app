import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './index.css'
import DashboardIcon from '../../assets/images/DashboardIcon.js'
import HomeIcon from '../../assets/images/HomeIcon.js'
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [visitorLogs, setVisitorLogs] = useState([]);
  const [error, setError] = useState(null); // Error state for handling fetch errors
  const navigate = useNavigate();
  const location = useLocation();
  // Check if user is logged in (based on token)
  const isLoggedIn = localStorage.getItem("authToken");
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("lastActiveTime");
    navigate("/login");
  };


  useEffect(() => {
    fetch("https://0zxbfdemyg.execute-api.us-east-1.amazonaws.com/prod/getVisitors")
      .then(res => res.json())
      .then(data => {
        setVisitorCount(data.count);
        setVisitorLogs(data.logs);
      })
      .catch(err => {
  console.error("getVisitors error", err);
  setError("Failed to load visitor logs.");
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
          <nav className="dark:border-gray-700 rounded-none bg-transparent dark:bg-transparent py-6 px-4 flex justify-end">
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className={`bg-[#294245] text-white py-4 px-8 leading-none rounded-[30px] shadow-md hover:bg-red-700 ${location.pathname !== '/login' ? 'block' : 'hidden'}`}
              >
                Logout
              </button>
            )}
          </nav>
        </header>
        <div className="bg-lightgray dark:bg-dark  h-full rounded-[20px] bg-[#F4F7FB]">
          <div className="w-full">
            <div className="container py-8">
              <div className='grid gap-4'>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <h1>Total Visitors: {visitorCount}</h1>
                    {/* <h1>Total Visitors:</h1> */}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="flex items-center gap-4 mb-8">
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
                      {/* <tbody>
                        {visitorLogs.map((log, i) => (
                          <tr key={i}>
                            <td>{log.ip}</td>
                            <td>{log.city}</td>
                            <td>{log.region}</td>
                            <td>{log.country}</td>
                            <td>{new Date(log.time).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody> */}
                      <tbody>
  {Array.isArray(visitorLogs) && visitorLogs.map((log, i) => (
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
