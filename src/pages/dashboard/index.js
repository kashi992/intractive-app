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
  const [mostClickedVideo, setMostClickedVideo] = useState(null);
  const [watchStats, setWatchStats] = useState([]);
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
        // Aggregate total clicks per videoId
        const videoClickMap = {};
        data.forEach(({ videoId, count }) => {
          if (!videoClickMap[videoId]) {
            videoClickMap[videoId] = 0;
          }
          videoClickMap[videoId] += count;
        });

        // Identify most clicked video
        const sorted = Object.entries(videoClickMap).sort((a, b) => b[1] - a[1]);
        if (sorted.length > 0) {
          const [videoId, totalClicks] = sorted[0];
          setMostClickedVideo({ videoId, totalClicks });
        }
      } catch (err) {
        console.error("Error loading all click stats", err);
      }
    };

    fetchAllClicks();
  }, []);

  useEffect(() => {
    const fetchWatchStats = async () => {
      try {
        const res = await fetch("https://db30bn6w66.execute-api.us-east-1.amazonaws.com/prod/getWatchStats");
        const data = await res.json();
        setWatchStats(data);
        console.log("watched", data);
      } catch (err) {
        console.error("Error loading watch stats", err);
      }
    };

    fetchWatchStats();
  }, []);


  return (
 <>
<h1>Dashboard</h1>
 </>
  )
};

export default Dashboard
