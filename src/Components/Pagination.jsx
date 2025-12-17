import React from "react";

function Pagination(props) {
  return (
    <div className="bg-gray-950 text-white justify-center flex p-2 mt-5">
       <div onClick={props.prev} className="px-6 hover:cursor-pointer hover:scale-150 duration-300"><i className="fa-solid fa-arrow-left"></i></div>
       <div className=" font-bold">{props.pageNO}</div>
       <div onClick={props.next} className="px-6 hover:cursor-pointer hover:scale-150 duration-300"><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  );
}

export default Pagination;
