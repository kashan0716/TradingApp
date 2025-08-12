import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-4">
            Search for an answer or bonus help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do i activate F&O"
            className="mb-3 mt-3"
          />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-4 mb-5">Featured</h1>
          <ol>
            <li>
              {" "}
              <a href="">Current Takeovers and Delisting - January 2025</a>
            </li>
            <br />
            <li>
              {" "}
              <a href="">Latest Intarday levearges - MIs & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
