import React from "react";

function Awards() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-2 mb-4">Largest Stock Broker in India</h1>
          <p className="text-muted fs-6 mb-4 mt-2">
            2+ Million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in.
          </p>
          <div className="row text-muted fs-6">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future options</p>
                </li>
                <li>
                  <p>Commotidy derivative</p>
                </li>
                <li>
                  <p>Currency derivative</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds & Govt. security</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            style={{ width: "85%" }}
            className="mt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
