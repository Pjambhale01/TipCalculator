import React from 'react'
import OutputOfCalculator from './Output'
import FotterOfCalculator from './Fotter'
class InputOfCalculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            BillAmount: 0,
            ServiceTip: 0,
            CustName: '',
            CustDetails: [],
            Total: []
        }
    }
    handleAmount = () => {
        this.setState({
            Total: [...this.state.Total, { Service: this.state.ServiceTip, TotalBill: this.state.BillAmount }]
        })
    }


    AddCustomer = () => {
        this.setState({
            CustDetails: [...this.state.CustDetails, { Name: this.state.CustName, ServiceRet: this.state.ServiceTip, Bill: this.state.BillAmount }], Name: ''
        })
    }

    render() {
        return (
            <div style={{ margin: 'auto', width: '40%', backgroundColor:'purple'}}>
                <h1 style={{ backgroundColor: 'blueviolet', textAlign: 'center', border: '2px solid red' }}>Tip Calculator</h1>
                <div style={{ textAlign: 'center', border: '2px solid green' }}>Enter your Bill Amount:<br></br>
                    <input style={{ color: "red" }} type='text' value={this.state.BillAmount} onChange={(val) => { this.setState({ BillAmount: val.target.value }) }}></input>
                    <br></br>
                    <hr></hr>
                    <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                        How was the Service:
                <select value={this.state.ServiceTip} onChange={(val) => { this.setState({ ServiceTip: val.target.value }) }}>
                            <option>Chooes...</option>
                            <option value='0.20'> Excellent (20%)</option>
                            <option value='0.10'> Moderate (10%)</option>
                            <option value='0.05'> bad (5%) </option>
                        </select>
                        <input style={{ marginLeft: '5px' }} type='text' placeholder='Customer Name' value={this.state.CustName} onChange={(val) => { this.setState({ CustName: val.target.value }) }}></input>
                        <button onClick={() => { this.AddCustomer() }}>AddCust</button>
                    </div>
                </div>
                <br></br>
                <OutputOfCalculator outPutBox={this.state.CustDetails} />
                <br></br>

                <button style={{ marginLeft: '200px', backgroundColor: 'green' }} onClick={() => { this.handleAmount() }}>Calculate tip&Customer</button>
                <div style={{ border: '2px solid red' }}>
                    <table style={{ textAlign: 'center', marginLeft: '200px', }}>
                        <tr>
                            <th>Total Customer</th>
                            <th></th>
                            <th>Tip</th>
                        </tr>
                        <tr>
                            <td>
                                {this.state.CustDetails.length}
                            </td>
                            
                            <td >
                                <FotterOfCalculator fottrCalculator={this.state.Total} />
                            </td>

                        </tr>
                    </table>
                </div>
                <div style={{backgroundColor:'black',color:'white',textAlign:'center'}}>2020@ Tip-Calculator </div> 
            </div>

        )
    }
}

export default InputOfCalculator