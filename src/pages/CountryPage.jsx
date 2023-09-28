import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCountryAll, searchByCode } from "../feature/country/countrySlice";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContentLoader from "react-content-loader";
import Skeleton from "@mui/material/Skeleton";
import { BsArrowLeft } from "react-icons/Bs";

const CountryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);
  // const [allLanguages, setAllLanguages] = useState([]);

  // useEffect(() => {
  //     // Make a GET request to the API
  //     fetch('https://restcountries.com/v3.1/all')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Extract all unique languages from the response
  //         const languagesSet = new Set();

  //         data.forEach((country) => {
  //           const languages = country.languages;
  //           if (languages) {
  //             Object.values(languages).forEach((language) => {
  //               languagesSet.add(language);
  //             });
  //           }
  //         });

  //         // Convert the Set of languages to an array
  //         const languagesArray = Array.from(languagesSet);

  //         // Set the array of all languages in state
  //         setAllLanguages(languagesArray);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data:', error);
  //       });
  //   }, []);

  const { countrySearch, loading } = useSelector((state) => state.country);
  console.log("fjhfurwhfuwhefbw", countrySearch[0]?.nativeName?.fra?.official);
  const dispatch = useDispatch();
  // Use useMemo to memoize the data and prevent unnecessary re-renders
  const memoizedCountryData = useMemo(() => countrySearch, [countrySearch]);

  useEffect(() => {
    if (id) {
      dispatch(searchByCode(id.toLowerCase()));
    }
  }, [dispatch, id]);

  return (
    <>
      <div className="country_page">
        <div className="country_page_main">
          <div className="country_page_btn">
            <button onClick={() => navigate(-1)}>
              {" "}
           <BsArrowLeft />
 Go Back
            </button>
          </div>
          {loading ? (
            <>
            
              {/* {[1, 2, 3, 4, 5].map((id) => (
                <div key={id}>
                  <h4>
                    <Skeleton />
                  </h4>
                  <p>
                    <Skeleton  />
                  </p>
                </div>
              ))} */}
              {/* <ContentLoader 
    speed={2}
    width={"100%"}
    height={"100vh"}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="dshudhs"
  
  >
    <rect x="48" y="8" rx="3" ry="3" width="100%" height="20" /> 
    <rect x="48" y="8" rx="3" ry="3" width="100%" height="30" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52%" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="20" cy="20" r="20" />
  </ContentLoader> */}
              <Skeleton variant="rectangular" width={310} height={38} />
              {/* <Skeleton /> */}
              <Skeleton width="60%" />
            </>
          ) : (
            <>
              <div className="country_page_contnt">
                <img
                  src={
                    memoizedCountryData[0]?.flags.svg ||
                    "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  }
                  alt={`Flag of ${memoizedCountryData[0]?.name?.common}`}
                  key={memoizedCountryData[0]?.flags.svg}
                />

                <div className="data">
                  <h1>{memoizedCountryData[0]?.name?.common || "N/A"}</h1>
                  <div className="main_data">
                    <div className="leftData">
                      <p>
                        <span>Native Names</span>:{" "}
                        {/* {countrySearch[0]?.name?.official || "Not found"} */}
                        {memoizedCountryData[0]?.name?.nativeName
                          ? Object.values(
                              memoizedCountryData[0]?.name?.nativeName
                            )
                              .map((e) => e.official)
                              .join(",")
                          : "N/A"}
                      </p>
                      <p>
                        <span>Population</span>:{" "}
                        {memoizedCountryData[0]?.population || "N/A"}
                      </p>
                      <p>
                        <span>Region</span>:{" "}
                        {memoizedCountryData[0]?.region || "N/A"}
                      </p>
                      <p>
                        <span>Sub Region</span>:{" "}
                        {memoizedCountryData[0]?.subregion || "N/A"}
                      </p>
                      <p>
                        <span>Capital</span>:{" "}
                        {memoizedCountryData[0]?.capital || "N/A"}
                      </p>
                      {/* <p><span></span>: {id}</p>
            <p><span></span>: {id}</p> */}
                    </div>
                    <div className="rightData">
                      <p>
                        <span>Start Of Week</span>:{" "}
                        {memoizedCountryData[0]?.startOfWeek || "N/A"}
                      </p>
                      <p>
                        <span>Currencies</span>:{" "}
                        {memoizedCountryData[0]?.currencies
                          ? Object.values(memoizedCountryData[0].currencies)
                              .map((e) => e.name)
                              .join(",")
                          : "N/A"}
                      </p>
                      <p>
                        <span>Currencies symbol</span>:{" "}
                        {memoizedCountryData[0]?.currencies
                          ? Object.values(memoizedCountryData[0].currencies)
                              .map((e) => e.symbol)
                              .join(",")
                          : "N/A"}
                      </p>
                      <p>
                        <span>Languages</span>:{" "}
                        {memoizedCountryData[0]?.languages
                          ? Object.values(memoizedCountryData[0].languages)
                              .map((e) => e)
                              .join(",")
                          : "N/A"}
                      </p>

                      {/* <p><span></span>: {id}</p> */}
                      {/* <p><span></span>: {id}</p> */}
                    </div>
                  </div>
                  <p>
                    <span>Translation</span>:{" "}
                    {memoizedCountryData[0]?.translations
                      ? Object.values(memoizedCountryData[0].translations)
                          .map((e) => e.official)
                          .join(", ")
                      : "N/A"}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CountryPage;
