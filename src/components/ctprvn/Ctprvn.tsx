import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import CtprvnTableBody from './CtprvnTableBody';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Ctprvn = (props: { history: { goBack: Function }}) => {
  const [ result, setResult ] = useState([]);
  const [ parm, setParm ] = useState([]);
  const [ sidoName, setSidoName ] = useState();
  const [ pageNo, setPageNo] = useState(1);
  
  useEffect(() => {
    const url = `/airkorea/airPollutionInfo/getCtprvnRltmMesureDnsty`;
    axios.get(url, {
      params: {
        sidoName: sidoName,
        ver: 1.1,
        pageNo: pageNo
      }
    }).then(res => {
      const { list, parm } = res.data;
      setParm(parm);
      setResult(list);
    }).catch(err => console.error(err));
  }, [ sidoName, pageNo ]);

  const handleSelectChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSidoName(e.target.value);
    setPageNo(1);
  };

  return (
    <div className="d-flex flex-wrap flex-column align-items-center px-5 py-2">
      <div className="d-flex justify-content-between col-12 align-items-center">
        <a style={{fontSize: '20px'}}>
          <i className="fas fa-arrow-left" onClick={() => console.log(props.history.goBack())}>{` 뒤로가기`}</i>
        </a>
        <FormControl className="col-4 align-self-end">
          <InputLabel htmlFor="age-simple">지역</InputLabel>
          <Select value={sidoName} onChange={handleSelectChange}>
            <MenuItem value={'서울'}>서울</MenuItem>
            <MenuItem value={'인천'}>인천</MenuItem>
            <MenuItem value={'대구'}>대구</MenuItem>
            <MenuItem value={'부산'}>부산</MenuItem>
            <MenuItem value={'울산'}>울산</MenuItem>
            <MenuItem value={'대전'}>대전</MenuItem>
            <MenuItem value={'광주'}>광주</MenuItem>
          </Select>
        </FormControl>
      </div>
      <table className="table table-striped col-12 text-center">
        <thead>
          <tr>
            <th style={{width: '14%'}}>#</th>
            <th style={{width: '14%'}}>일시</th>
            <th style={{width: '14%'}}>위치</th>
            <th style={{width: '10%'}}>pm10</th>
            <th style={{width: '10%'}}>pm10 (1일)</th>
            <th style={{width: '10%'}}>pm25</th>
            <th style={{width: '10%'}}>pm25 (1일)</th>
          </tr>
        </thead>
        <tbody>
          {
            result != null ? result.map((item, index) => {
              const { dataTime, stationName, pm10Value, pm10Value24, pm25Value, pm25Value24 } = item;
              return (
                <CtprvnTableBody 
                  key={index}
                  index={index + 1 + (10 * (pageNo - 1))}
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
      <div>
        {
          pageNo > 1 ? <button type="button" className="btn btn-sm text-white indigo" onClick={() => setPageNo(pageNo - 1)}>{`< 이전`}</button> : ''
        }
        {
          result == null ? '' :
          result.length == 10 ? <button type="button" className="btn btn-sm text-white indigo" onClick={() => setPageNo(pageNo + 1)}>{`다음 >`}</button> : ''
        }
      </div>
    </div>
  )
}

export default Ctprvn;