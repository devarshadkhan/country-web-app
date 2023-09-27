import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Loader = () => {
  const isLoading = useSelector((state) => state.loader.loader);
  //   const isLoading = false; //useSelector((state) => state.loader);
//   useEffect(() => {
//     if (isLoading) {
//       document.body.classList.add(styles["blur-background"]);
//     } else {
//       document.body.classList.remove(styles["blur-background"]);
//     }
//   }, [isLoading]);

  return (
    <>
      {!isLoading && (
        <div >
        {/* <div className="loader">
        <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
        </div> */}
        <div class="loadingio-spinner-rolling-6dhc1rawouw"><div class="ldio-k6ovq83059o">
<div></div>
</div></div>
<style type="text/css">


</style>
        </div>
      )}
    </>
  );
};

export default Loader;
