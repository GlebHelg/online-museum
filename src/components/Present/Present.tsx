import axios from 'axios';
import React, { useMemo, useState } from 'react';
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
  useMemo(() => {
    console.log('In MEMO');
    if(props.searchResponse.objectIDs?.length > 0){
      setCurrentObjects(props.searchResponse.objectIDs.slice(0, 9));
    }
  },[props.searchResponse.objectIDs]);


  let presentationObjects: JSX.Element[];
  if(currentObjects.length > 0){
    presentationObjects = currentObjects.map((currentObj, idx)=> <PresentationObject key={idx} objectId={currentObj}/>);
  }
  else{
    presentationObjects = [<></>];
  }

  console.log('currentObjects: ', currentObjects)
  return (
    <>
      <div className="present">
        {presentationObjects}
      </div>
      <Pagination currentObjects={currentObjects} setCurrentObjects={setCurrentObjects} allObjects={props.searchResponse.objectIDs}/>
    </>
  );
}

export default Present;

