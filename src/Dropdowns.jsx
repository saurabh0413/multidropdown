import { useState } from "react";

function Dropdowns() {
  const data = [
    {
      country: "india",
      cities: ["nagpur", "mumbai", "chennai"]
    },
    {
      country: "pakistan",
      cities: ["lahore", "taib", "ravalpindi"]
    },
    {
      country: "us",
      cities: ["sanfrans", "califor", "dekhte hai"]
    }
  ];
  const [currIndex, setCurrIndex] = useState("0");
  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) => {
          setCurrIndex(e.target.value);
        }}
      >
        {data.map((item, index) => {
          return (
            <option value={index} key={index}>
              {item.country}
            </option>
          );
        })}
      </select>
      <select name="" id="">
        {data[currIndex].cities.length > 0 &&
          data[currIndex].cities.map((item, index) => {
            return (
              <option value="" key={index}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default Dropdowns;
