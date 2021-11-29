import React, { useState, useEffect } from "react";
import getPlayerData from '../Services/player.service'


const Players = () => {

    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        getPlayerData().then(
            (response) => {
                setPlayerData(response.data)
            }
        )
    }, []);



    return (
        <div className='app-container'>
            <table>
                <thead>
                    <tr>
                        <th>Player Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Team Id</th>
                    </tr>
                </thead>
                <tbody>
                    {playerData.map((data) => (
                        <tr key={data.playerid}>
                            <td>{data.playerid}</td>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.emailId}</td>
                            <td>{data.age}</td>
                            <td>{data.gender}</td>
                            <td>{data.teamid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};
export default Players;
