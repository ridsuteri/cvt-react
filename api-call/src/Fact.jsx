import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Fact() {
  const [fact, setFact] = useState('');

  async function callApi() {
    const apiResponse = await fetch("https://catfact.ninja/fact");
    const json = await apiResponse.json();
    console.log("api response", json);
    setFact(json.fact);
  }

  useEffect(() => {
    callApi();
  }, []);

  return <div>
    {fact ? fact  : "Loading....."}
    <button>Fetch another fact</button>
  </div>;
}

export default Fact;
