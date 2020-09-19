import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Props {

    stockMap: {
        [key: string]: number
    }
    text: string
}

const StockChart: React.FC<Props> = ({ stockMap, text }) => {

    // update stock chart whenever the filter text changes
    useEffect(() => {
    }, [text])

    // build the tickers (the chart) based on the filter text 
    const tickers = stockMap == null ? null : Object.keys(stockMap).map((key) => {
        return key.startsWith(text.toUpperCase()) ? (
            <div key={key}>
                <Link to={`/stock/${key}`}>
                    <button>{key}</button>
                    {stockMap[key] === 1 ? <h5>Fav</h5> : null}
                </Link>
            </div>
        ) : 
        null
    })

    return (
        <div>
            {tickers}
        </div>
    )
}

export default StockChart