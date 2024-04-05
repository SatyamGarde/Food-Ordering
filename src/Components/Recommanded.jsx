import React from "react";
import { CDN_URL } from "../Utils/constants";
import { addItems } from "./cartSlice";
import { useDispatch } from "react-redux";

function Recommanded(props) {
  const dispatch = useDispatch();
  const handleAdditem = (item) => {
    dispatch(addItems(item));
  };

  const { resData } = props;
  return (
    <div>
      <div className="recommand ">
        <div className="recommand-item ">
          <li className="recommand-title" key={resData.data.id}>
            {resData.data.name}
          </li>
          <li className="recommand-cost">
            {resData?.data.costForTwoString
              ? resData?.data.costForTwoString
              : resData?.data.costForTwo}
          </li>
          <li>{resData?.data.cuisines.join(", ")}</li>
          <li>
            {resData.data.address
              ? resData.data.address
              : resData.data.locality}
          </li>
        </div>
        <div className="img-btn">
          <img
            className="recommand-img"
            src={CDN_URL + resData?.data.cloudinaryImageId}
          />
          <button onClick={() => handleAdditem(resData)}>Add+</button>
        </div>
      </div>
      <hr className="recommand-border "></hr>
    </div>
  );
}

export default Recommanded;
