import React from "react";

export const runtime = "edge";
export const revalidate = 86400;

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-semibold text-white">
        404 | Page Not Found
      </h1>
    </div>
  );
};
export default NotFound;
