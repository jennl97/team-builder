import React from "react";

const Team = props => {
    return(
        <div>
        {props.teamList.map(team => {
            return(
                <div key={team.id}>
                    <p>{team.name}</p>
                    <p>{team.email}</p>
                    <p>{team.role}</p>
                </div>
            )
        })}
        </div>
    );
    
};

export default Team;