"use client";

import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import Sidebar from "./Sidebar";

const LectureThree = () => {
  return (
    <div className={cn(GeistSans.className, "h-screen flex bg-gray-100")}>
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold">Overview</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">
                  Total Users
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  +12%
                </span>
              </div>
              <p className="mt-2 text-3xl font-bold">2,543</p>
              <p className="mt-2 text-sm text-gray-500">
                Increased by 257 since last month
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  +8%
                </span>
              </div>
              <p className="mt-2 text-3xl font-bold"> $45,257</p>
              <p className="mt-2 text-sm text-gray-500">
                Increased by $3,257 since last month
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">
                  Active Sessions
                </h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  +5%
                </span>
              </div>
              <p className="mt-2 text-3xl font-bold">1325</p>
              <p className="mt-2 text-sm text-gray-500">
                Increased by 103 since yesterday
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">
                  Conversion Rate
                </h3>
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  -2%
                </span>
              </div>
              <p className="mt-2 text-3xl font-bold">12.3%</p>
              <p className="mt-2 text-sm text-gray-500">
                Decreased by 1.8% since last week
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-lg font-semibold">User Activity</h3>
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded">
                <p className="text-gray-500">Chart Placeholder</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-lg font-semibold">Revenue Overview</h3>
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded">
                <p className="text-gray-500">Chart Placeholder</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
            </div>
            <div className="divide-y">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center p-6">
                  <div className="w-10 h-10 mr-4 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium">
                      User #{item} performed an action
                    </p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LectureThree;
