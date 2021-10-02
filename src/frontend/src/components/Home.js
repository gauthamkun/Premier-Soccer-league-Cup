import React from "react";

function Home() {
  return (
    <>
    <h1 class="mainHeading"> Premier Soccer League Cup</h1>
    <aside>
        <blockquote>
            <img src="images/pslcup.png" alt={"images/4.jpg"} width="150px" height="150px"/>
        </blockquote>
        BRING IT ON!
    </aside>
    <section>
        <div  class="container">
        <h3>The Premier Soccer League Cup Tournament is as much about having fun as it is about playing quality soccer. Here are a few aspects we add to the tournament weekend:
        </h3>
        </div>

        <div  class="container">
        All teams play with the team size of 11v11, 7v7, or 5v5. We will be increasing the sense of community at the tournament and allowing you to easily watch other games. We will have a pre-tournament party at ASU Sun Devil Stadium in Tempe from 6:00 – 8:00 PM on Friday evening, allowing teams to get together and meet other players. On Saturday we will have a food truck at the fields. Unofficially, we have heard there will be a Beer Share event on Saturday after the final games in which teams are encouraged to bring and share canned beer from their hometown.
        </div>
        <div  class="container">
        <h3>
        The tournament location itself is a major attraction. Tempe, Arizona is consistently voted one of the nicest, most livable small cities in the United States. The city of 100,000 people is known for housing the state’s flagship university (Arizona State University at Tempe), having a vibrant high-tech based economy, and being home to the Sun Devils, full of shops, restaurants, and nightlife. Nestled at the base of the Grand Canyons, Tempe draws all sorts of visitors and residents interested in the outdoors.
        </h3>
        </div>
    </section>

    <section>
        <h1 class="mainHeading">Highlights about the tournament</h1>
    </section>

    <section id="boxes">
        <div class="boxContainer">
          <div class="box">
            <img src="images/memorial.jpeg" alt={"images/4.jpg"}  width="200" height="200"/>
            <h3>Memorial Day Weekend</h3>
            <p>All soccer matches will be played on the memorial day weekend</p>
          </div>
          <div class="box">
            <img src="images/asulogo.png" alt={"images/4.jpg"}  width="200" height="200"/>
            <h3>In the home of Sun Devils</h3>
            <p>Soccer Tournament in the heart of Arizona at ASU in Tempe</p>
          </div>
          <div class="box">
            <img src="images/soccerfield.jpeg" alt={"images/4.jpg"}  width="200" height="200"/>
            <h3>12 Soccer Fields</h3>
            <p>Largest soccer sports amenities in the Arizona</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;