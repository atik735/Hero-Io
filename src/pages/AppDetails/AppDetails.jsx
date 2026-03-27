import React, { useState } from "react";
import downdload from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

export default function AppDetails() {
  const [installed, setInstalled] = useState([]);
  const [isInstalled, setIsInstalled] = useState(false);

  const { id } = useParams();

  const appDetails = useLoaderData();

  const app = appDetails.find((item) => item.id === Number(id));

  const handleInstall = (id) => {
    setIsInstalled(true);

    toast("App Installed!");

    setInstalled([...installed, parseInt(id)]);
  };
  return (
    <div className="w-11/12 mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <div className="flex-1">
          <img className="w-full h-72" src={app.image} />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-xl font-bold">{app.title}</h1>

          <h1>Developed By Hero Io</h1>

          <hr />
          <ToastContainer />
          <div className="flex gap-5">
            <div className="flex flex-col gap-3">
              <img className="w-12 h-12" src={downdload} alt="" />
              <span>Downloads</span>
              <span className="text-xl font-bold">{app.downloads}</span>
            </div>
            <div className="flex flex-col gap-3">
              <img className="w-12 h-12" src={ratings} alt="" />
              <span>Average Ratings</span>
              <span className="text-xl font-bold">{app.ratingAvg}</span>
            </div>
            <div className="flex flex-col gap-3">
              <img className="w-12 h-12" src={review} alt="" />
              <span>Total Reviews</span>
              <span className="text-xl font-bold">{app.reviews}</span>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleInstall(app.id)}
              className="px-4 py-2 bg-green-500 rounded-lg text-white font-semibold"
            >
              {isInstalled ? "Installed" : "Install"}
            </button>
          </div>
        </div>
      </div>

      <hr className="mt-3" />

      <div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <BarChart
              data={app.ratings}
              layout="vertical"
              margin={{ top: 10, right: 40, left: 20, bottom: 10 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#f97316"
                radius={[0, 10, 10, 0]}
                barSize={10}
              >
                <LabelList dataKey="value" position="right" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <hr className="mt-3" />

      <div className="space-y-2 mt-2">
        <h1 className="text-lg font-semibold">Descriptipn</h1>
        <p className="text-gray-500 text-justify">{app.description}</p>
      </div>
    </div>
  );
}
