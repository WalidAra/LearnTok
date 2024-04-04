import React from "react";

const MainView = ({ children }: Children) => {
  return (
    <main className="flex-1 w-full h-M53 ">
      {children}
    </main>
  );
};

export default MainView;
