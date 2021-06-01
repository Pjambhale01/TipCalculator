import React from 'react'

class FotterOfCalculator extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div>
               
                {this.props.fottrCalculator.map((item)=>{
                    return item.Service * item.TotalBill
                }).reduce((sum,value)=>{return sum +value},0)}
                
            </div>
            
        )
    }
}
export default FotterOfCalculator