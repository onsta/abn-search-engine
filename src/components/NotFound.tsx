import React from "react";

export const NotFound = () => {
  return (
    <div
      className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded"
      role="alert"
    >
      <strong className="font-bold">Error </strong>
      <span className="block sm:inline">
        Could not load data, try to reload the page.
      </span>
    </div>
  );
};
