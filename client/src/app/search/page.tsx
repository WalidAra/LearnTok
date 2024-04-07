"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();

  const looking = searchParams.get("looking");
  return (
    <div>
      <h1>Search Results for: {looking}</h1>
    </div>
  );
};

export default Search;
