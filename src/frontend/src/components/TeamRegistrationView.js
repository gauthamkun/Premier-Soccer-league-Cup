import React from "react";

const Details=()=>{
    
    return <div style={{
           backgroundImage:"images/match.jpg" ,
           backgroundRepeat: 'no-repeat',
    width:'300px',
    opacity:0.7
     }}
           >
             <header style={{
               margincenter: 600, width:'500px',
               backgroundColor: "black"
             }}>Teams Registered</header>
        <table style={{margincenter:600,width:'500px',
 }}>
            <thead style={{backgroundColor:'grey',
        }}>
                <tr>
                    <th>Teamname</th>
                    <th>Clubname</th>
                    <th>Coachname</th>
                    <th>AgeGroup</th>
                    <th>Division</th>
                    <th>Gender</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Arizona State</td>
                    <td>Arizona</td>
                    <td>Robin Fraser</td>
                    <td>6-8</td>
                    <td>Top</td>
                    <td>Male</td>
                    <td>robin@asu.edu</td>
                </tr>
                <tr>
                    <td>Cal State</td>
                    <td>California</td>
                    <td>Caleb Porter</td>
                    <td>8-10</td>
                    <td>Lower</td>
                    <td>Male</td>
                    <td>caleb@cal.edu</td>
                </tr>
                <tr>
                    <td>Texas State</td>
                    <td>Texas</td>
                    <td>Marco Ferruzzi</td>
                    <td>10-14</td>
                    <td>Middle</td>
                    <td>Male</td>
                    <td>marco@texas.edu</td>
                </tr>
                <tr>
                    <td>Stanford University</td>
                    <td>Stanford</td>
                    <td>Tab Ramos</td>
                    <td>10-14</td>
                    <td>Middle</td>
                    <td>Male</td>
                    <td>tab@stanford.edu</td>
                </tr>
                <tr>
                    <td>Washington State University</td>
                    <td>Washington</td>
                    <td>Bob Bradley</td>
                    <td>14-18</td>
                    <td>Lower</td>
                    <td>Male</td>
                    <td>bob@washington.edu</td>
                </tr>
                <tr>
                    <td>Carnegie Mellon University</td>
                    <td>Carnegie</td>
                    <td>Greg Vanney</td>
                    <td>10-14</td>
                    <td>Lower</td>
                    <td>Male</td>
                    <td>greg@carn.edu</td>
                </tr>
                <tr>
                    <td>UC Berkley</td>
                    <td>California</td>
                    <td>Bruce Arena</td>
                    <td>14-18</td>
                    <td>Lower</td>
                    <td>Male</td>
                    <td>bruce@cal.edu</td>
                </tr>
                <tr>
                    <td>UC Riverdale</td>
                    <td>California</td>
                    <td>Jim Curtin</td>
                    <td>8-10</td>
                    <td>Lower</td>
                    <td>Male</td>
                    <td>jim@cal.edu</td>
                </tr>
                
            </tbody>    
            </table>
            
        </div>;
}
export default Details;