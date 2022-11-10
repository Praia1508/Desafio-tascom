import { useEffect, useState } from 'react'
import '/src/App.css'
import './SituationByCountry.css'
import Country from '../Cards/Country/Index';

function SituationByCountry() {

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
            <div className="global-situation">
                <div className="global-situation-head">
                    <p id='green'>#USEMASK</p>
                    <h2>SITUATION BY COUNTRY</h2>
                </div>
                <div className='country-list'>
                    {data?.Countries?.slice(0, 4).map(country => (
                        <Country key={country.ID} data={country}/>
                    ))}
                </div>
               
            </div>
         </div>
 )
}

export default SituationByCountry