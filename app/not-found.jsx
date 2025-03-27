import React from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-6xl font-bold mb-4 gradient-title">404</h1>
      <h2 className="text-2xl mb-6">Oops! Page Not Found</h2>
      <p className="text-lg mb-8 max-w-md text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Button  asChild>
        <a href="/">Go Back Home</a>
      </Button>
    </div>
  );
};

export default NotFound;
