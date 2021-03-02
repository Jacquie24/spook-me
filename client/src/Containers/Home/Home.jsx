import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="section is-medium">
        <h1 className="subtitle">Don't forget your Holy Water...</h1>
      </section>

      <div className="columns">
        <section className="section is-small">
          <div className="column">
            <div className="container is-fluid">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    * USER BEWARE...YOU'RE IN FOR A SCARE! *<br></br>
                    <br></br>
                    Ready to get spooked? Here you will find the most haunted
                    locations in America that you can visit yourself or use
                    other user stories to spook your guests out by the campfire.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
		<br></br>
        {/* <div className="column">
          <div className="container is-fluid">
            <div className="notification is-primary sight">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://www.visitsavannah.com/sites/default/files/styles/large_square/public/original-marshall-house.jpg?itok=wT9khAzR"
                      alt="Marshall House"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content is-centered mb-1">
                      <p className="title is-4">Marshall House</p>
                      <p className="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div className="content">
                    123 E Broughton St <br></br>
                    Savannah, GA
                    <br></br>
                    <Link to={`/sightings/6036a2adf3f15e00287620fa`}>
                      Tell Me More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
