import React, { FunctionComponent } from 'react';

interface Props {
  key: Number;
  dataTime: String;
  stationName: String;
  pm10Value: Number;
  pm10Value24: Number;
  pm25Value: Number;
  pm25Value24: Number;
}

const CtprvnTableBody: FunctionComponent<Props> = (props) => {
  const { key, dataTime, stationName, pm10Value, pm10Value24, pm25Value, pm25Value24 } = props;
  return (
    <tr>
      <td>{key}</td>
      <td>{dataTime}</td>
      <td>{stationName}</td>
      <td>{pm10Value}</td>
      <td>{pm10Value24}</td>
      <td>{pm25Value}</td>
      <td>{pm25Value24}</td>
    </tr>
  )
}

export default CtprvnTableBody;