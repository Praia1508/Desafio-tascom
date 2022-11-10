import { useEffect, useState } from 'react'
import '/src/App.css'
import './GlobalSituation.css'

function GlobalSituation() {

    const api = 'https://api.covid19api.com/summary';
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(api, {
            method: "GET"
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setData(data);
        })
    }, [])


    return(
        <div className="container">
            <div className='global-situation'>
                <div className='global-situation-head'>
                    <p id='green'>#WASHYOURHANDS</p>
                    <h2>GLOBAL SITUATION</h2>
                </div>
                <div id='global-situation-card'>
                    <div className='global-situation-left-content'>
                        <div className='number-cases'>
                            <div className='total-confirmeds'>
                                <h3>{data?.Global?.TotalConfirmed}</h3>
                                <p id='green'>CONFIRMED CASES</p>
                            </div>
                            <div className='total-confirmeds'>
                                <h3>{data?.Global?.TotalDeaths}</h3>
                                <p id='green'>CASES OF DEATH</p>
                            </div>
                        </div>
                        <hr className='verticalSeparator'/>
                        <div className='new-cases'>
                            <p>{data?.Global?.NewDeaths}</p>
                            <p id='green'>NEW DEATHS</p>
                            <p>{data?.Global?.NewConfirmed}</p>
                            <p id='green'>NEW CONFIRMEDS</p>
                            <p>{data?.Global?.NewRecovered}</p>
                            <p id='green'>NEW RECOVEREDS</p>
                            <p>{data?.Global?.TotalRecovered}</p>
                            <p id='green'>TOTAL RECOVEREDS</p>

                        </div>
                    </div>
                    <div className='global-situation-right-content'>
                        <h2>CHOOSE ONE GRAPH</h2>
                        <p>u need to put some graph here</p>
                    </div>
                    <strong className='updated-status'>UPDATED {data?.Global?.Date.slice(0,7)}- <span>{data?.Global?.Date.slice(11,16)}</span></strong>
                </div>
            </div>
        </div>
    )
}

export default GlobalSituation