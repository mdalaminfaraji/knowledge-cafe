import React, { useEffect, useState } from 'react';
import './Cart.css';


const SideCart = ({ ReadTime, cTitle }) => {

  
  
  const [time, setTime]=useState(ReadTime);
 
  useEffect(()=>{
      const getReadTime=localStorage.getItem("readTime");
     
      setTime(getReadTime);
  },[ReadTime])
  return (
    <div className="mt-4">
      <h5 className="cart shadow rounded">Spend Time On Read : {time} min</h5>
      <h5 className="cart shadow rounded">Bookmarked Blogs:{cTitle.length}</h5>
      <div>
        {cTitle.map((title) => (
          <p className="bookmark shadow rounded">{title}</p>
        ))}
      </div>
    </div>
  );
};

export default SideCart;