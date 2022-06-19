import React from 'react';
import axios from 'axios';
import { ISearchResponse } from '../Interfaces/Interfaces';

const querySearchApi = (                e: React.FormEvent<HTMLFormElement>, 
                        setSearchResponse: React.Dispatch<React.SetStateAction<ISearchResponse>>,
                          setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
                        ) => {
  e.preventDefault();

  const searchPhrase = (e.currentTarget.elements.namedItem('search-field') as HTMLInputElement).value;

  const requestString = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${searchPhrase}`;

  axios.get(requestString)
      .then(resp => {
        const respData: ISearchResponse = resp.data as ISearchResponse;
        console.log('respData: ', respData);
        setSearchResponse(respData);
        setErrorMessage(null);
      })
      .catch(
        (error) => {
          console.log('Error has occured: ', error);
          // setErrorMessage
          setErrorMessage("The request went bad... Try a different searchword or something :)");
        }
      );
}

interface ISearchProps {
  setSearchResponse: React.Dispatch<React.SetStateAction<ISearchResponse>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
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

