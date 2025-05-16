import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './index.css'
import DashboardIcon from '../../assets/images/DashboardIcon.js'
import HomeIcon from '../../assets/images/HomeIcon.js'
import { useLocation, useNavigate } from "react-router-dom";
import UsersIcon from "../../assets/images/UsersIcon.js";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell
} from 'recharts';



const Dashboard = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [visitorLogs, setVisitorLogs] = useState([]);
  const [error, setError] = useState(null); // Error state for handling fetch errors
  const [stats, setStats] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [allClickStats, setAllClickStats] = useState([]);
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

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("https://ax3oqjtahf.execute-api.us-east-1.amazonaws.com/prod/get-first-click-stats");
        const data = await res.json();
        const sorted = data.sort((a, b) => b.count - a.count);
        setStats(sorted);
      } catch (err) {
        console.error("Error loading stats", err);
        setError("Failed to load first click stats.");
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBarColor = (videoId, index, maxCount) => {
    const colorPalette = [
      "#4B9DFE", "#62C2A2", "#FFA573", "#ED5A9E", "#6A5ACD", "#00CED1", "#FF69B4"
    ];

    if (index === 0) return "#FF4C4C"; // 🔴 highest clicked video in red
    return colorPalette[index % colorPalette.length];
  };

  useEffect(() => {
  const fetchAllClicks = async () => {
    try {
      const res = await fetch("https://ax3oqjtahf.execute-api.us-east-1.amazonaws.com/prod/allClicks");
      const data = await res.json();
      setAllClickStats(data);
      console.log(data);
    } catch (err) {
      console.error("Error loading all click stats", err);
    }
  };

  fetchAllClicks();
}, []);

  return (
    <div className="dashboardWrap flex w-full">
      <div className="xl:block hidden">
        <nav aria-label="Sidebar with multi-level dropdown example"
          className="h-full fixed menuSidebar bg-white left-0">
          <div className="bg-white dark:bg-transparent rounded-none">
            <h2 className="px-6 py-4 flex items-center sidebarlogo font-bold h-[72px]">UGL Solution</h2>
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
      <div className="page-wrapper-sub flex flex-col w-full">
        <header className={`sticky top-0 z-[5] bg-white ${isScrolled ? 'border-b' : ''}`}>
          <nav className="dark:border-gray-700 rounded-none bg-transparent dark:bg-transparent py-3 px-4 flex justify-end h-[72px]">
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
        <div className="bg-lightgray dark:bg-dark  h-full rounded-[20px] bg-[#F4F7FB]" style={{ borderTopRightRadius: '0px' }}>
          <div className="w-full">
            <div className="container py-8">
              <div className='grid gap-7 dashboardInner'>
                <div style={{ gridArea: "aa" }}>
                  <div className="bg-white rounded-xl shadow-md py-6 px-8 w-fit" >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#16CDC740] text-secondary p-3 rounded-md">
                        <UsersIcon className="w-[24px] h-[24px]" iconClr="#16CDC7" />
                      </div>
                      <h4 className="sf text-[20px] font-semibold">Total users visitors</h4>
                    </div>
                    <h1 className="sf text-[50px] font-bold text-center">{visitorCount}</h1>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6" style={{ gridArea: "bb" }}>
                  <h2 className="sf text-[30px] font-bold mb-6">Visitor Analytics by Location</h2>
                  {/* Display error message if fetch failed */}
                  {error && <p className="text-red-500">{error}</p>}
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="font-medium p-4 text-start bg-gray-200">IP</th>
                        <th className="font-medium p-4 text-start bg-gray-200">City</th>
                        <th className="font-medium p-4 text-start bg-gray-200">County</th>
                        <th className="font-medium p-4 text-start bg-gray-200">Country</th>
                        <th className="font-medium p-4 text-start bg-gray-200">Visited at</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(visitorLogs) && visitorLogs.map((log, i) => (
                        <tr key={i}>
                          <td className="border-b border-gray-300 p-4 font-medium">{log.ip}</td>
                          <td className="border-b border-gray-300 p-4 font-medium">{log.city}</td>
                          <td className="border-b border-gray-300 p-4 font-medium">{log.region}</td>
                          <td className="border-b border-gray-300 p-4 font-medium">{log.country}</td>
                          <td className="border-b border-gray-300 p-4 font-medium">{new Date(log.time).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6" style={{ gridArea: "cc" }}>
                  <h2 className="sf text-[30px] font-bold mb-6">First Click Video Stats</h2>
                  {/* Display error message if fetch failed */}
                  {error && <p className="text-red-500">{error}</p>}
                <div className="h-[400px] overflow-auto w-full">
<table className="w-full overflow-auto">
                    <thead className="sticky top-0">
                      <tr>
                        <th className="font-medium p-4 text-start bg-gray-200">Video Name</th>
                        <th className="font-medium p-4 text-start bg-gray-200">Click Count</th>
                        <th className="font-medium p-4 text-start bg-gray-200">IP Address</th>
                        <th className="font-medium p-4 text-start bg-gray-200">Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(stats) && stats.length > 0 &&
                        stats.flatMap(({ videoId, clicks }) =>
                          clicks.map((click, index) => (
                            <tr key={`${videoId}-${index}`}>
                              <td className="border-b border-gray-300 p-4 font-medium">{videoId}</td>
                              <td className="border-b border-gray-300 p-4 font-medium">1</td>
                              <td className="border-b border-gray-300 p-4 font-medium">{click.ip}</td>
                              <td className="border-b border-gray-300 p-4 font-medium">
                                {new Date(click.timestamp).toLocaleString()}
                              </td>
                            </tr>
                          ))
                        )}
                    </tbody>
                  </table>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart
                        data={stats}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="videoId" />
                        <YAxis />
                        <Tooltip />
                        <Bar
                          dataKey="count"
                          barSize={40} // 🔹 narrower bars
                          fill="#8884d8"
                        >
                          {
                            stats.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={getBarColor(entry.videoId, index, stats[0].count)}
                              />
                            ))
                          }
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6" style={{ gridArea: "dd" }}>
                  <h2 className="sf text-[30px] font-bold mb-6">First Click Video Stats</h2>
                  {/* Display error message if fetch failed */}
                  {error && <p className="text-red-500">{error}</p>}
                <div className="h-[400px] overflow-auto w-full">
<table className="w-full overflow-auto">
      <thead className="sticky top-0">
        <tr>
          <th className="font-medium p-4 text-start bg-gray-200">IP Address</th>
          <th className="font-medium p-4 text-start bg-gray-200">Video ID</th>
          <th className="font-medium p-4 text-start bg-gray-200">Total Clicks</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(allClickStats) && allClickStats.map((row, i) => (
          <tr key={i}>
            <td className="border-b border-gray-300 p-4 font-medium">{row.ip}</td>
            <td className="border-b border-gray-300 p-4 font-medium">{row.videoId}</td>
            <td className="border-b border-gray-300 p-4 font-medium">{row.count}</td>
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
