"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  let [data, setData] = useState({ locomotive: 'motor', hours: '12', minutes: '30' });

  useEffect(() => {
    async function update() {
      const response = await fetch("/api", {cache: "no-cache"});
      let newData = await response.json();
      setData(newData);
    }

    setInterval(update, 1000);

  }, [setData]);

  return (
    <main className="large">
      {/* {JSON.stringify(getData())} */}
      <div style={{fontSize: "0.7em"}}>Næste tog:</div>
      <div className="large">{data["hours"]}:{data["minutes"]}</div>
      <div className="radios large">
        <span className={data["locomotive"] != "motor" ? "faded" : ""}>Motor</span>
        <span className={data["locomotive"] != "damp" ? "faded" : ""}>Damp</span>
      </div>
    </main>
  );
}
