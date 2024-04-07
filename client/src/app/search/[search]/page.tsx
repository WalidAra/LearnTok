import React from "react";

type Props = {
  params:{
    search:string
  }
}

const Search = ({params:{search}}:Props) => {

  return (
    <div>
      <h1>Search Results for: {search} </h1>
    </div>
  );
};

export default Search;
