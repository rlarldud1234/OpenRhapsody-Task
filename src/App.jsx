import React, { useEffect, useState } from "react";
import { fetchAd } from "./api";

function App() {
  const [advertisment, setAdvertisment] = useState();

  useEffect(() => {
    fetchAd("PUBLIC_TEST_UNIT_ID_375_80")
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
