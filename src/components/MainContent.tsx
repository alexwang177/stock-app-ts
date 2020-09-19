import React, { useState }from 'react'

import StockChart from './StockChart'

interface Props {
    stockMap: {
        [key: string]: number
    }
}

const MainContent: React.FC<Props> = ({ stockMap }) => {

    // state that holds text from the input bar
    let[text, setText] = useState("")

    return (
        <div>
            <div>
                Filter <input type="text" onChange={(e) => setText(e.target.value)}></input>
            </div>
            <StockChart stockMap={stockMap} text={text}/>
        </div>
    )
}

export default MainContent