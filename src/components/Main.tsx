import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Link to="/getMsrstnAcctoRltmMesureDnsty">
        <button className="btn btn-primary" type="button">측정소별 실시간 측정정보 조회</button>
      </Link>
      <Link to="/getUnityAirEnvrnIdexSnstiveAboveMsrstnList">
        <button className="btn btn-primary" type="button" style={{marginLeft: '10px', marginRight: '10px'}}>통합대기환경지수 나쁨 이상 측정소 목록조회</button>
      </Link>
      <Link to="/getCtprvnRltmMesureDnsty">
        <button className="btn btn-primary" type="button">시도별 실시간 측정정보 조회 오퍼레이션</button>
      </Link>
    </div>
  );
}

export default Main;