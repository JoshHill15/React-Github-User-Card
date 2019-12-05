import React from "react"
import axios from "axios"
import Card from "./Card"

class CardList extends React.Component {
        state = {
            followers: [],
            me: [],
            followers2: {},
        }

     users = ["1sdc0d3r", "squashgray", "lyndsiWilliams", "DustinG98"]
     


    componentDidMount(){
        // me
        axios.get("https://api.github.com/users/JoshHill15")
        .then(res => {
            console.log("me", res.data)
            this.setState({ me: res.data })
        })
        .catch(err => console.log("WE GOT AN ERR", err))


        // My followers
    axios.get("https://api.github.com/users/JoshHill15/followers")
    .then(res => {
        console.log("followers", res.data)
        this.setState({
            followers: res.data
        })
    })
    .catch(err => console.log("SOMETHINGS WRONG", err))
        // foreach
    this.users.map(cv => {
        axios.get(`https://api.github.com/users/${cv}`)
        .then(res => {
            console.log("forEach", res.data)
            this.setState({
                followers2: res.data,
            })
        })
        .catch(err => console.log("SOMETHINGS ELSE IS WRONG", err))

    })

    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.followers !== this.state.followers){
            console.log("component updated")
        }
    }

    render(){
        return (
            <div>
                <p className = "me">My Card: <br/>{this.state.me.name}
                <br/>{this.state.me.bio}</p>

                <h3>My followers: </h3>
                {this.state.followers.map(follower => (
                    <Card key = {follower.id} follower = {follower}/>
                ))}
                <p className = "two">forEach: <br/>{this.state.followers2.name}</p>
                <img src = {this.state.followers2.avatar_url} alt = "alt" />
            </div>
        )
    }
}

export default CardList