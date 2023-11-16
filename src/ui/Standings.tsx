import canucks from '/team-logos/canucks-logo.png'
import FetchStandings from '../model/services/FetchStandings';     
import { useState } from 'react'

export default function Standings() {
    const [canucksGP, setCanucksGP] = useState(null);

    const fetchData = async () => {
        const standings = new FetchStandings();
        const standingsData = await standings.getStandings();
        setCanucksGP(standingsData.standings[4].gamesPlayed);
    }   

    console.log(canucksGP);
    
    return(
        <div>
            <div>
                Pacific Division
            </div>
            <table>
                <tbody>
                    <tr className='stat-type-labels'>
                        <th colSpan={2}>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>L</th>
                        <th>OTL</th>
                        <th>Pts</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>Diff</th>
                        <th>L10</th>
                        <th>Strk</th>
                    </tr>
                    <tr className='canucks-stats'>
                        <td className='canucks-image'><img src={canucks} alt="" /></td>
                        <td className='canucks-name'>Canucks</td>
                        <td className='canucks-gp'>{canucksGP}</td>
                        <td className='canucks-w'></td>
                        <td className='canucks-l'></td>
                        <td className='canucks-otl'></td>
                        <td className='canucks-pts'></td>
                        <td className='canucks-gf'></td>
                        <td className='canucks-ga'></td>
                        <td className='canucks-diff'></td>
                        <td className='canucks-l10'></td>
                        <td className='canucks-strk'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}