import React, { useState } from "react";

const TeamForm = props => {
    const [team, setTeam] = useState({ name: "", email: "", role: ""});

    return(
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                placeholder="Enter Team Member Name"
                />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                placeholder="Enter Team Member Email"
                />

            <label htmlFor="role">Role</label>
            <input
                type="text"
                name="role"
                placeholder="Enter Team Member Role"
            />

            <button type="submit">Add Team Member</button>
            
        </form>
    )

}

export default TeamForm;