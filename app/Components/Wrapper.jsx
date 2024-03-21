"use client";

const Wrapper = ({ children }) => {
  // children will be the by default prop
  return <div className="w-full pb-8 px-2 md:px-10 bg-white">{children}</div>;
};

export default Wrapper;
