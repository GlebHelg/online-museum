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

  let presentationObject: JSX.Element;
  if(props.searchResponse.objectIDs){
    presentationObject = <PresentationObject objectId={props.searchResponse.objectIDs[0]}/>;
  }
  else{
    presentationObject = <></>;
  }


  return (
    <div className="present">
      {presentationObject}
    </div>
  );
}

export default Present;

