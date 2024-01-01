import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import "./style.css";
function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [scrollPercentage, setScrollPerveentage] = useState(0);

  async function fetchData(geturl) {
    try {
      setLoading(true);
      const response = await fetch(geturl);
      const result = await response.json();

      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setData(result.products);
      }
    } catch (error) {
      setLoading(false);

      setError(error.message);
    }
  }
  function handlePercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPerveentage((howMuchScrolled / height) * 100);
  }
  console.log(scrollPercentage);
  useEffect(() => {
    window.addEventListener("scroll", handlePercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  useEffect(() => {
    fetchData(url);
  }, [url]);
  if (loading) {
    return <div>Data is loading please wait</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom scroll indicator</h1>
        <div className="scroll-progress">
          <div
            className="current-scroll-bar"
            style={{
              width: `${scrollPercentage}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataitem) => <p>{dataitem.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
