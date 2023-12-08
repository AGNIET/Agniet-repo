import React from "react";
import Loader from "react-js-loader";

// interface LoaderProps {
//   title: string;
//   body: string;
// }

export default function GeneralLoader() {
  return (
    <div className={"item"}>
      <Loader
        type="bubble-loop"
        bgColor={"white"}
        color={"white"}
        title={"Loading data"}
        size={100}
        // body="Please wait for data"
      />
    </div>
  );
}
