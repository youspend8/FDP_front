import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CtprvnTableBody from './CtprvnTableBody';

const Ctprvn = () => {
  const [ result, setResult ] = useState([]);
  const [ parm, setParm ] = useState([]);
  
  useEffect(() => {
    const url = `/airkorea/airPollutionInfo/getCtprvnRltmMesureDnsty`;
    axios.get(url, {
      params: {
        sidoName: '서울',
        ver: 1.1
      }
    }).then(res => {
      const { list, parm } = res.data;
      console.log(list)
      setParm(parm);
      setResult(list);
    }).catch(err => console.error(err));
  });

  return (
    <table style={{textAlign: "center", marginLeft: 'auto', marginRight: 'auto'}}>
      <thead>
        <tr>
          <th style={{width: '14%'}}>#</th>
          <th style={{width: '14%'}}>일시</th>
          <th style={{width: '14%'}}>위치</th>
          <th style={{width: '14%'}}>pm10</th>
          <th style={{width: '14%'}}>pm10 (1일)</th>
          <th style={{width: '14%'}}>pm25</th>
          <th style={{width: '14%'}}>pm25 (1일)</th>
        </tr>
      </thead>
      <tbody>
        {
          result != null ? result.map((item, index) => {
            const { dataTime, stationName, pm10Value, pm10Value24, pm25Value, pm25Value24 } = item;
            return (
              <CtprvnTableBody 
                key={index}
                dataTime={dataTime} 
                stationName={stationName} 
                pm10Value={pm10Value}
                pm10Value24={pm10Value24}
                pm25Value={pm25Value}
                pm25Value24={pm25Value24}
              />
            );
          }) : ''
        }
      </tbody>
    </table>
  )
}

export default Ctprvn;