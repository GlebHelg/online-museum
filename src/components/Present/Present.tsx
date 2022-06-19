import axios from 'axios';
import React from 'react';
import { IObjectResponse, ISearchResponse } from '../Interfaces/Interfaces';
import './Present.css';
import PresentationObject from './PresentationObject/PresentationObject';

interface IPresentProps {
  searchResponse: ISearchResponse
}

function Present(props: IPresentProps) {

  //console.log('Present: ', JSON.stringify(props.searchResponse));

  let presentationObject: number;
  if(props.searchResponse.objectIDs){
    presentationObject = props.searchResponse.objectIDs[0];
  }
  else{
    presentationObject = 0;
  }


  return (
    <div className="present">
      <PresentationObject objectId={presentationObject}/>
    </div>
  );
}

export default Present;

