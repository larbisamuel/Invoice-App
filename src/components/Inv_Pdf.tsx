import React, {useState} from 'react';

interface Item {
    itemName: string;
    actualQty: number;
    receivedQty: number;
    remainingStock: number;
}

const Inv_Pdf: React.FC = () => {
    
    const Items ={
        itemName: "Bond Green",
        actualQty: 0,
        receivedQty: 0,
        remainingStock: 0
    }


    return(
        <div className='mt-3 p-5 container shadow-lg'>
        <nav className="navbar navbar-expand-lg shadow-lg" style={{backgroundColor: '#628FA9', color: 'white'}}>
            <div className='container-fluid'>
                <h1 style={{fontFamily: 'times new roman'}}>Abeka Corp.</h1>
                <span className='align-items-right' style={{fontFamily: 'times new roman'}}><h4>Invoice #1</h4></span>
            </div>
        </nav>

        <div className='mt-5 p-3' style={{fontFamily:"inter"}}>
            <h4>P.O. Box 164, Ablekuma,</h4>
            <h4>Accra-Ghana</h4>
            <h4>+233 248791002</h4>
        </div>

        <div className='p-3'style={{fontFamily:"inter"}}>
            <h5>Behind Melcom Ghana</h5>
        </div>
        <div className='table-responsive mt-5' >
        <table className="table table-bordered rounded">
            <thead className="table-light">
                <tr style={{backgroundColor: "blue", fontSize:"20px"}}>
                    <th scope="col">Item Name</th>
                    <th scope="col">Actual Qty</th>
                    <th scope="col">Received Qty</th>
                    <th scope="col">Remaining Stock </th>
                </tr>
                
            </thead>
            <tbody >
                <tr style={{fontFamily: 'inter'}}>
                    <td>Black Bond</td>
                    <td>2500</td>
                    <td>2500</td>
                    <td>2400</td>
                </tr>
                <tr style={{fontFamily: 'inter'}}>
                    <td>Green Bond</td>
                    <td>3000</td>
                    <td>2500</td>
                    <td>2500</td>
                </tr>
                 <tr style={{fontFamily: 'inter'}}>
                    <td>Blue Bond</td>
                    <td>1500</td>
                    <td>2000</td>
                    <td>1580</td>
                </tr> 
                <tr style={{fontFamily: 'inter'}}>
                    <td>Belts</td>
                    <td>200</td>
                    <td>150</td>
                    <td>80</td>
                </tr>
            </tbody>
            
        </table>
       
        </div><br></br>
        <div className='mt-3'><h5 style={{fontFamily: "calibri-light"}}>Total Number of Items: 4</h5></div>

        <div className='py-3'style={{fontFamily: "calibri-light", fontSize: "20px"}}>Signature: </div>
        </div>
    )
}
export default Inv_Pdf

