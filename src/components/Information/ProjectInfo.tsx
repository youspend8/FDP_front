import React, { Component, useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';

interface ItemType {
  name: String;
  location: String;
  port: Number;
  language: String;
  description: String;
  stacks: String;
}

const ProjectInfo = () => {
  const [ data, setData ] = useState([]);
  
  const callApi = async() => {
    const result = await axios.get('/projectInfo');
    setData(result.data.microservice.service);
    return result;
  }

  const effect: React.EffectCallback = () => {
    callApi();
  }

  useEffect(effect, []);

  return (
    <div className="col-9 mt-4 mx-auto">
      {
        data ? data.map((item: ItemType, index) => {
          const { name, location, port, description, language, stacks } = item;
          return (
            <blockquote className="blockquote bq-primary">
              <p className="bq-title p-1">
                {name ? name : ''}
                <span className="p-1 ml-3 font-weight-bold text-dark" style={{fontSize: '14px'}}>
                  {
                    (language ? 'stack : ' + language + ', ' : '') + (stacks ? stacks : '')
                  }
                </span> 
              </p>
              <p className="p-1 my-2">
                {description ? description : ''}
              </p>
              <p className="p-1 m-1">
                {'# server : ' + (location ? location : '')}
                {' | port : ' + (port ? port : '')}
                {' ::::: 상태 : 정상'}
              </p>
            </blockquote>
          );
        }) : ''
      }
    </div>
  );
}

export default ProjectInfo;