import React from "react"

function Card (props){
    const { login, avatar_url } = props.follower
    return (
        <div className = "cards">
            <p>{login}</p>
            <p>{avatar_url}</p>
        </div>
    )
}


export default Card