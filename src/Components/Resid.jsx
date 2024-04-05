import React from "react";
import { useEffect, useState } from "react";
import resList from "../Utils/mockData";
import { useParams } from "react-router-dom";

function Resid() {
  const [Resinfo, setResinfo] = useState([]);
  const id = useParams();
  //   const [id, setid] = useState();
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setResinfo(resList);
  };
  return (
    <div className="menu">
      <h1>{Resinfo[id]?.data?.name}</h1>
      <h2>Menu</h2>
      <ul>
        {Resinfo.map((item) => (
          <li key={item.data.id}>{item.data.cuisines.join(", ")}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resid;
