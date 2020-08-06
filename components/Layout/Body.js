import React from 'react';
import ReactMapGL from "react-map-gl";

const Body = ({ children }) => {
  return <main>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {children}
    </div>
  </main>;
};

export default Body;
