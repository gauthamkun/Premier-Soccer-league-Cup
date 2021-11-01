import React from "react";
import match from './match.jpg';

const Details=()=>{
    
    return <div style={{
           backgroundImage: "url(" + match + ")",
           backgroundRepeat: 'no-repeat',
    width:'600px',
    opacity:0.7
     }}
           >
             <header style={{
               marginLeft: 600, width:'500px',
               backgroundColor: "white"
             }}>Group Details</header>
        <table style={{marginLeft:600,width:'500px',
 }}>
            <thead style={{backgroundColor:'grey',
        }}>
                <tr>
                    <th>Group1</th>
                    <th>Group2</th>
                    <th>Venue</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>USA</td>
                    <td>England</td>
                    <td>Ground1</td>
                    <td>05 October 2021</td>
                </tr>
                <tr>
                    <td>England</td>
                    <td>Australia</td>
                    <td>Ground2</td>
                    <td>06 September 2021</td>
                </tr>
                <tr>
                    <td>Australia</td>
                    <td>Germany</td>
                    <td>Ground3</td>
                    <td>10 Feb 2021</td>
                </tr>
                <tr>
                    <td>USA</td>
                    <td>Germany</td>
                    <td>Ground4</td>
                    <td>10 Feb 2021</td>
                </tr>
                <tr>
                    <td>USA</td>
                    <td>Canada</td>
                    <td>Ground5</td>
                    <td>11 August 2022</td>
                </tr>
            </tbody>    
            </table>
        </div>;
}
export default Details;