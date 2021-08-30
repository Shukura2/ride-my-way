import React from 'react'

const MapRender = ({destination, amount}) => {

    const tableMap = [
        {destination: destination, amount: amount}
    ]

    const renderTableMap = (tableMap) => {
        return(<tr key={tableMap}>
            <td>{tableMap.destination}</td>
            <td>{tableMap.amount}</td>
        </tr>)
    }

    return (
        <div>
            <h5>Destination: {destination}  </h5>
            <h5>Amount: { amount }  </h5>

            {/* <table className='table'>
                <thead>
                    <tr>
                        <th>Destination</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default MapRender
