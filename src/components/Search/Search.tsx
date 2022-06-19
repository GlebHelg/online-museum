import React from 'react';
import axios from 'axios';
import { ISearchResponse } from '../Interfaces/Interfaces';

const querySearchApi = (                e: React.FormEvent<HTMLFormElement>, 
                        setSearchResponse: React.Dispatch<React.SetStateAction<ISearchResponse>>,
                          setErrorMessage: React.Dispatch<React.SetStateAction<string>>
                        ) => {
  e.preventDefault();

  const searchPhrase = (e.currentTarget.elements.namedItem('search-field') as HTMLInputElement).value;

  const requestString = `https://collectionapi.metmuseum.org/public/collection/v1/searc?hasImages=true&q=${searchPhrase}`;

  axios.get(requestString)
      .then(resp => {
        const respData: ISearchResponse = resp.data as ISearchResponse;
        console.log('respData: ', respData);
        setSearchResponse(respData);
      })
      .catch(
        (error) => {
          console.log('Error has occured');
          // setErrorMessage
          setErrorMessage(error);
          return Promise.reject(error);
        }
      );
}

interface ISearchProps {
  setSearchResponse: React.Dispatch<React.SetStateAction<ISearchResponse>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

function Search(props: ISearchProps) {
  return (
    <div className="search">
        <form onSubmit={(e) => querySearchApi(e, props.setSearchResponse, props.setErrorMessage)}>
            <label htmlFor="search-field">Search for art</label><br />
            <input id="search-field" type="text" name="search-field" ></input>
            <button type="submit">Search</button>
        </form>
    </div>
  );
}

export default Search;

