import React from "react";

export default function Loading() {
  return (
    <div className="loading-overlay">
      <img
        src={"/shop/assets/images/loading.gif"}
        alt="Loading image"
      />
    </div>
  );
}
