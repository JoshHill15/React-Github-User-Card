import React from "react"
import CardList from "./components/CardList"
import "./app.css"
class App extends React.Component {
    
    render(){
        return (
            <div className = "all">
                <h1>Github User Cards!</h1>
                <CardList />
            </div>
        )
    }
}

export default App