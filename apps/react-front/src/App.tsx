import React from "react";
import { Phone } from "@phone_catalog/common_tooling";
import PhoneData from "./components/PhoneData/PhoneData";
import useAxios from "./utils/useAxios";
import loading from "./assets/loading.gif";
import "./App.scss";

const App: React.FC = () => {
  const { response: phones } = useAxios({
    method: "GET",
    url: "/phones",
  });

  return (
    <main className="App">
      <div className="catalog">
        <header>
          <h2 className="title">Phone Catalog</h2>
        </header>
        <div className="body">
          {phones ? (
            <>
              {phones.map((phone: Phone) => (
                <PhoneData key={phone.id} phone={phone} />
              ))}
            </>
          ) : (
            <img
              style={{ alignSelf: "center", marginTop: "9rem" }}
              src={loading}
              width="20%"
              alt="Loading Gif"
            />
            // <p>Loading...</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
