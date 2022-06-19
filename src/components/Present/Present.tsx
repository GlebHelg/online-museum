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

  let presentationObject: JSX.Element;
  if(props.searchResponse.objectIDs){
    presentationObject = <PresentationObject objectId={props.searchResponse.objectIDs[0]}/>;
  }
  else{
    //presentationObject = <></>;
    presentationObject = <PresentationObject objectId={360837}/>;
  }


  return (
    <div className="present">
      {presentationObject}
      <Pagination currentObjects={currentObjects} setCurrentObjects={setCurrentObjects}/>
    </div>
  );
}

export default Present;

