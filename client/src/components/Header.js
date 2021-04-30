import React from "react"

function Header(props){
    const welcome = props.data.state.loading ? "loading...." : "Welcome, " + props.data.state.character.firstName
    return(
        <p>{welcome}</p>
    )
}
export default Header