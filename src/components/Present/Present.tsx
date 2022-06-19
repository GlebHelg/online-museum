import axios from 'axios';
import React, { useState } from 'react';
import { IObjectResponse, ISearchResponse } from '../Interfaces/Interfaces';
import Pagination from './Pagination/Pagination';
import './Present.css';
import PresentationObject from './PresentationObject/PresentationObject';

interface IPresentProps {
  searchResponse: ISearchResponse
}

function Present(props: IPresentProps) {

  //console.log('Present: ', JSON.stringify(props.searchResponse));

  const [currentObjects, setCurrentObjects] = useState<number[]>([]);

  let presentationObject: JSX.Element[];
  if(currentObjects.length > 0){
    presentationObject = currentObjects.map((currentObj, idx)=> <PresentationObject key={idx} objectId={currentObj}/>);
  }
  else{
    //presentationObject = <></>;
    presentationObject = [0].map(() => <PresentationObject objectId={360837}/>);
  }

  console.log('currentObjects: ', currentObjects)
  return (
    <div className="present">
      {presentationObject}
      <Pagination currentObjects={currentObjects} setCurrentObjects={setCurrentObjects} allObjects={props.searchResponse.objectIDs}/>
    </div>
  );
}

export default Present;

