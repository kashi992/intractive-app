import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const buttons = [
  {
    id: "VESM001",
    oppName: "Early Access Acceleration",
    desc: [
      { points: "Opportunity to take advantage of the early access dates." },
      { points: "Allocation of risk of early access." },
      { points: "Provision of access within Station Boxes for Flash Butt Welding." },
      { points: "Enable Long Welded Rail Distribution ahead of Station access." },
      { points: "Crows Nest example – Best for Project outcome." }
    ],
    price: "~$10,000,000"
  },
  {
    id: "VESM002",
    oppName: "Various SMF Changes",
    desc: [
      { points: "Combine the cycle paths and pedestrian walkways" },
      { points: "Pits and culverts, no monitoring sensors" },
      { points: "Bollard lighting rather than large hinged poles" },
      { points: "Bird and Vermin management strategy, cost-effective controls" },
      { points: "Internal green wall removal" },
      { points: "The removal of compressed air" },
      { points: "Reduced hot water points around the stabling yard" },
      { points: "The provision of tools by the operator" },
    ],
    price: "~$10,000,000"
  },
  {
    id: "VESM003",
    oppName: "Building Optimisation at SMF",
    desc: [
      { points: "Combining Administration functional staff from the Administration building with the administrative staff from the Maintenance Building. Resulting in a separate standalone OCC building combined Administration Staff." },
    ],
    price: "~$12,000,000"
  },
  {
    id: "VESM005",
    oppName: "High Voltage Network changes at SMF",
    desc: [
      { points: "Reticulate 11kV instead of 33kV around SMF precinct." },
      { points: "Optimising specialist equipment supply." },
      { points: "Removal of excess high voltage transformers servicing combined and removed facilities." },
    ],
    price: "~$1,500,000"
  },
  {
    id: "VESM007",
    oppName: "Trackform Optimisation",
    desc: [
      { points: "Alternative trackform types that are simpler to construct in the tunnel than Type 2A." },
      { points: "Type 3A from a buildability and maintenance perspective compared to the system utilised on CSW-LW Package." },
    ],
    price: "~$30,000,000"
  },
  {
    id: "VESM009",
    oppName: "Early Access Acceleration",
    desc: [
      { points: "Opportunity to take advantage of the early access dates." },
      { points: "Allocation of risk of early access." },
      { points: "Provision of access within Station Boxes for Flash Butt Welding." },
      { points: "Enable Long Welded Rail Distribution ahead of Station access." },
      { points: "Crows Nest example – Best for Project outcome." },
    ],
    price: "~$15,000,000"
  },
];

const CustomerEngineering = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  return (
    <section className='customerEngineer'>
      <div className="container">
        <div className="customerEngineerInner">
          <div className="flex gap-4 flex-col mt-4">
            {buttons.map((button) => (
              <Link
                key={button.id}
                className="bg-[#44817D] uppercase text-white w-fit cursor-pointer font-semibold text-[16px] h-[40px] px-5 flex justify-center items-center rounded-[25px]"
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {button.id}
              </Link>
            ))}
          </div>

          <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="border-r-[1px] border-white px-2 py-1 bg-[#44817D] text-[15px] leading-tight text-white   text-start">Opportunity Name</th>
                  <th className="border-r-[1px] border-white px-2 py-1 bg-[#44817D] text-[15px] leading-tight text-white  text-start">Description</th>
                  <th className="border-r-[1px] border-white px-2 py-1 bg-[#4FBFAF] text-[15px] leading-tight text-white  text-start">Price Benefit - First Pass Approximate</th>
                </tr>
              </thead>
              <tbody>
                {buttons.map((button) => (
                  <tr
                    key={button.id}
                    className={`${hoveredButton === button.id ? "table-row transition-all duration-300" : "hidden"
                      }`}
                  >
                    <td className="px-4 py-1 font-semibold">{button.oppName}</td>
                    <td className="px-4 py-1 bg-[#F9F9F9]">
                    <ul className="list-disc ps-[10px] text-[#44817D]">
                        {button.desc.map((des, index) => (
                          <li className=' text-black font-medium' key={index}>{des.points}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-1">
                      <Link className='cursor-pointer bg-[#DCF2EF] border-2 border-[#4FBFAF] w-[90%] mx-auto h-[45px] flex justify-center items-center rounded-[35px] text-[20px] text-[#4FBFAF]'>{button.price}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
        <div className="mt-auto mb-3">
          <p className='text-[#44817D] text-[32px] leading-normal font-bold sf bg-white w-fit px-[10px]'>10 Value Enhancements Opportunities have been approved Valued at: </p>
          <h2 className='text-[#44817D] text-[40px] leading-normal font-bold sf bg-white w-fit px-[10px]'>$157,500,000</h2>
        </div>
      </div>
    </section>
  )
}

export default CustomerEngineering
