import React from "react";

const SearchParams = () => {
  const location = "Seattle, WA";
  return (
    <div>
      <form>
        <label htmlFor="location">
          Location
          <input type="text" id={"location"} value={location} placeholder={"Location"} />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
