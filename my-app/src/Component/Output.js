import React from 'react'
class OutputOfCalculator extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
             
            <div style={{border:'2px solid red'}}>
                <div style={{textAlign:'center'}}>Customer List</div>
                <hr></hr>
                {this.props.outPutBox.map((item) => {
                    return <li>{item.Name} Offering a tip of  :{item.ServiceRet * item.Bill}Rupee</li>
                })}
                
            </div>
        )
    }
}
export default OutputOfCalculator