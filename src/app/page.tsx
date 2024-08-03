"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './layout';

// Dynamically import Screen1 and Screen2 to disable SSR
const Screen1 = dynamic(() => import('./screens/screen1'), { ssr: false });
const Screen2 = dynamic(() => import('./screens/screen2'), { ssr: false });

const Home: React.FC = () => {
  // Ensure this code runs only on the client
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div>
      <html>
        <body>
          <Router>
            <Layout>
              <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <div className="flex flex-col items-center">
                        <img src="/your-image.jpg" alt="Your Image" className="mb-8" />
                        <div className="flex space-x-4">
                          <Link to="/screen1">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                              Go to Screen 1
                            </button>
                          </Link>
                          <Link to="/screen2">
                            <button className="bg-green-500 text-white px-4 py-2 rounded">
                              Go to Screen 2
                            </button>
                          </Link>
                        </div>
                      </div>
                    }
                  />
                  <Route path="/screen1" element={<Screen1 />} />
                  <Route path="/screen2" element={<Screen2 />} />
                </Routes>
              </main>
            </Layout>
          </Router>
        </body>
      </html>
    </div>
  );
};

export default Home;
