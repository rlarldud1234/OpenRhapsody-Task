import React, { useEffect, useState } from "react";
import { fetchAd } from "./api";

function App() {
  const [advertisment, setAdvertisment] = useState();

  useEffect(() => {
    fetchAd()
      .then((response) => {
        const res = response;

        setAdvertisment(res.result);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: advertisment?.ad ?? "" }} />
    </div>
  );
}

export default App;
