import Card from "./Rescards";
import resList2 from "../Utils/mockdata";
import { useState,useEffect } from "react";
const Body = () => {
  const [listofres, setlistofres] = useState(resList2); //? state variable
  const [searchtxt,setsearchtxt] = useState(""); 
  const [filterres, setfilterres] = useState(resList2);
//   useEffect(()=>{
//     fetchData();
//   },[]); //?two argus callback fun nd dependency array

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const Json = await data.json();
//     console.log(Json);
//     setlistofres(Json.data.cards);
//   }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-input" value={searchtxt} onChange={(e)=>{
                setsearchtxt(e.target.value);
            }}/>
            <button className="search-btn" onClick={()=>{
                            const filterlist = listofres.filter((res) =>
                              res.name
                                .toLocaleLowerCase()
                                .includes(searchtxt.toLocaleLowerCase())
                            );
                            setfilterres(filterlist);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterlist = listofres.filter((res) => res.avgRating >= 4.3);
            setlistofres(filterlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterres.map((restaur) => (
          <Card key={restaur.id} resdata={restaur} />
        ))}
      </div>
    </div>
  );
};
export default Body;
