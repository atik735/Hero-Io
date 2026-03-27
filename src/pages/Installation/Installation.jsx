import React from 'react';

export default function InstalledApps() {
  return (
      <div className="w-full max-w-[1600px] bg-white rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="pt-8 pb-6 px-8 text-center">
          <h1 className="text-3xl font-bold text-[#1E3A8A]">Your Installed Apps</h1>
          <p className="text-gray-500 mt-1">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="px-8 pb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-lg font-semibold text-gray-800">1 Apps Found</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort By Size</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Size</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                {/* App Icon */}
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex-shrink-0 mr-4" />

                {/* App Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Forest: Focus For Productivity
                  </h3>
                  <div className="flex items-center gap-4 mt-1 text-sm">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <span>↓</span>
                      <span>9M</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span>5</span>
                    </div>
                    <div className="text-gray-500">258 MB</div>
                  </div>
                </div>

                {/* Uninstall Button */}
                <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors">
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}