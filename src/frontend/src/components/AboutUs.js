import React from "react";

function AboutUs() {
  var current = new Date();
  var expiry = new Date("December 01, 2021 17:39:00")
  return (
    <>
        <div class="content">
         {
           current.getTime() < expiry.getTime()?<><div>
            <p>We conduct tournaments for the people from the age of 6-60. It is conducted in various formats like 5V5, 7V7,11V11.</p>
            <p>Based on the the teams performance in previous tournaments they will shift red , blue, black division.</p>
            <p>All the tournaments will be conducted within a period of 4 days.They will overlooked referees with license</p>
            <p>The location of the tournament will be posted a month before the tournamnt starts.</p>
            <p>Fees various on the age, divison and number of people from 500$ to 600$</p>

            <h2>Registration can be done :</h2>
            <li>Choose Apply in homepage</li>
            <li>Complete the form details and click apply.</li>
            <li>After submitting it pay to PremierLeaguesoccerTour </li>
            <li>Take page of the confirmation page</li>

          </div><div class="row">
              <div class="column">
                <div class="card">
                  <div class="container">
                    <h2>Age group</h2>
                    <li>6-8</li>
                    <li>8-10</li>
                    <li>10-14</li>
                    <li>14-18</li>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <div class="container">
                    <h2>Fees</h2>
                    <li>5 v 5 - 500$</li>
                    <li>7 v 7 - 550$</li>
                    <li>11 v 11 - 575$</li>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <div class="container">
                    <h2>Division</h2>
                    <li>Black - 1st division </li>
                    <li>Blue  - 2nd division </li>
                    <li>Red - 3rd division </li>
                    <li>First time entry will be automatically added to 3rd division</li>
                    <li>Top 4 of that tournament will allowed to participate in the divison above</li>
                    <li>Bottom 4 will relegated to the division below</li>
                  </div>
                </div>
              </div>
            </div></> :<p>Bye</p>
         }
      </div>
    </>
  );
}

export default AboutUs;