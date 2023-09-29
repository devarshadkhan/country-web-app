import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountryAll, searchByRegion } from "../feature/country/countrySlice";
import { Link } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContentLoader from "react-content-loader";
import Skeleton from "@mui/material/Skeleton";

const ContryCard = () => {
  const { countryData, loading , region, searchCountry } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  // console.log(countryData);
 const filterData = countryData.filter((item)=> item.name.common.toLowerCase().includes(searchCountry))
  useEffect(() => {
    dispatch(fetchCountryAll());
    if(region){
      dispatch(searchByRegion(region))
     }
    
  }, [region, dispatch, searchCountry]);

  return (
    <div>
      <section className="country-container">
        {loading ? (
          <>
            {" "}
            <div className="sketlon">
              {(loading ? Array.from(new Array(12)) : countryData).map((id) => (
                <div key={id} className="bodysketlon">
                  <Skeleton variant="rectangular" width={310} height={38} />
                  {/* <Skeleton /> */}
                  <Skeleton width="60%" />
                  {/* <ContentLoader 
    speed={2}
    width={"100%"}
    height={"100vh"}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  
  >
    <rect x="48" y="8" rx="3" ry="3" width="100%" height="20" /> 
    <rect x="48" y="8" rx="3" ry="3" width="100%" height="30" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52%" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="20" cy="20" r="20" />
  </ContentLoader> */}
                </div>
              ))}
              {/* <h1>loading Data</h1> */}
            </div>
          </>
        ) : (
          <>
            {filterData?.map((item) => {
              return (
                <>
                  <Link
                    to={`country/${item.cca3}`}
                    className="country-card"
                    key={item.id}
                  >
                    <img
                      src={item.flags.png}
                      alt=""
                      className="country-image"
                    />
                    <div className="country-content">
                      <h3>{item.name.common} </h3>
                      {/* <i>{item.name.official} </i> */}
                      <p>
                        Population: <span>{item.population}</span>
                      </p>
                      <p>
                        Region: <span>{item.region}</span>
                      </p>
                      {/* <p>
          Language: <span> {item?.languages?.fra
      ? item.languages.fra
      : item?.languages?.eng
      ? item.languages.eng
      : item?.languages?.urd
      ? item.languages.urd
      : "No language specified"}</span>
          Language: <span>{item?.languages?.fra || "No language specified"}</span>
          </p> */}
                      <p>
                        Capital: <span>{item.capital}</span>
                      </p>
                    </div>
                  </Link>
                </>
              );
            })}
          </>
        )}
      </section>
    </div>
  );
};

export default ContryCard;
