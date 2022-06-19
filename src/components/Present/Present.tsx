import React from 'react';
import { ISearchResponse } from '../Interfaces/Interfaces';


interface IPresentProps {
  searchResponse: ISearchResponse
}


function Present(props: IPresentProps) {
  return (
    <div className="present">
      {JSON.stringify(props.searchResponse)}
    </div>
  );
}

export default Present;

