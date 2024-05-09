import React from "react";

<<<<<<< HEAD
function SearchInp({ searchForm, onSearch }) {
=======
function SearchInp({searchForm, onSearch}) {
>>>>>>> 056b5e512fc545880e5ef2cca9ff5ecb1a61c6fa
  return (
    <input
      className="p-2 border border-gray-300 rounded-md"
      type="text"
      placeholder="검색하세요"
      onChange={onSearch}
      value={searchForm}
    />
  );
}

export default SearchInp;
