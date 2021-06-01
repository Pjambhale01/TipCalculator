import React from 'react'
import InputOfCalculator from "./Input"
class HeaderOfCalculator extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{backgroundColor:'blue'}}>
                <h2>Tip Calculator</h2>
                <InputOfCalculator/>
            </div>
        )
    }
    
}

export default HeaderOfCalculator