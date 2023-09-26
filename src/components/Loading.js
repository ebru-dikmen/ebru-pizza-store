import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="spinner-border" role="status" style={{width:'80px', height:'80px', color:'green', marginTop:'200px'}}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
