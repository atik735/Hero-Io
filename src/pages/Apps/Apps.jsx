import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import noApps from "../../assets/ChatGPT Image Mar 24, 2026, 11_07_44 AM.png";

export default function Apps() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("data.json");

        const topApps = res.data;

        setData(topApps);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filteredApps = search
    ? data.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase()),
      )
    : data;

  return (
    <div className="mt-10 w-11/12 mx-auto">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-center mt-5">
          Our All Application
        </h1>
        <p className="text-gray-400 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex justify-between">
          <h1>
            <span className="font-bold">({filteredApps.length})</span> Apps
            Found
          </h1>
          <input
            type="text"
            className="border-gray-500 border-2 p-2 rounded-xl"
            placeholder="Search Apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="name"
            id=""
          />
        </div>
      </div>

      {filteredApps.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredApps.map((singleApp) => (
            <Link
              to={`/appDetails/${singleApp.id}`}
              class=" bg-white rounded-xl shadow-md p-3"
            >
              <div class="">
                <img
                  className="h-72 w-full mx-auto object-cover"
                  src={singleApp.image}
                  alt=""
                  srcset=""
                />
              </div>

              <h3 class="text-lg font-bold mt-3 text-gray-800">
                {singleApp.title}
              </h3>

              <div class="flex items-center justify-between mt-3 text-xs">
                <span class="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-0.5 rounded">
                  ⬇ {singleApp.downloads}
                </span>

                <span class="flex items-center gap-1 text-orange-500 bg-orange-100 px-2 py-0.5 rounded">
                  ★ {singleApp.ratingAvg}
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <img className="h-80 w-96" src={noApps} />
        </div>
      )}
    </div>
  );
}
