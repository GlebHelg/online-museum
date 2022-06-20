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
  const [activePage, setActivePage] = useState<number>(1);
  useMemo(() => {
    if(props.searchResponse.objectIDs?.length > 0){
      setCurrentObjects(props.searchResponse.objectIDs.slice((activePage-1)*9, activePage*9));
    }
  },[props.searchResponse.objectIDs]);

  useMemo(() => {
    if(props.searchResponse.objectIDs?.length > 0){
      setCurrentObjects(props.searchResponse.objectIDs.slice((activePage-1)*9, activePage*9));
    }
  },[activePage]);


  let presentationObjects: JSX.Element[];
  if(currentObjects.length > 0){
    presentationObjects = currentObjects.map((currentObjs, idx)=> <PresentationObject key={idx} objectId={currentObjs}/>);
  }
  else{
    presentationObjects = [<></>];
  }

  //console.log('currentObjects: ', currentObjects)
  return (
    <>
      <div className="present">
        {presentationObjects}
      </div>
      <Pagination activePage={activePage} setActivePage={setActivePage} allObjects={props.searchResponse.objectIDs}/>
    </>
  );
}

export default Present;

