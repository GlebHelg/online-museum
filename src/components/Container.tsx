import React, { useState, createContext } from 'react';
import './Container.css';
import ErrorBox from './ErrorBox/ErrorBox';
import {ISearchResponse} from './Interfaces/Interfaces';
import Present from './Present/Present';
import Search from './Search/Search';


export const ContainerContext = createContext({});
function Container() {

    // States
    let [searchResponse, setSearchResponse] = useState<ISearchResponse>({} as ISearchResponse);
    let [errorMessage, setErrorMessage] = useState<string | null>("");
    

    console.log("Container errorMessage: ", errorMessage);

    return (
        <ContainerContext.Provider value={setErrorMessage}>
            <div className="layout">
                <div className="error-box-wrapper">
                    <ErrorBox errorMessage={errorMessage} />
                </div>
                <div className="main-container">
                    <div className="search-wrapper">
                        <Search setSearchResponse={setSearchResponse} 
                                setErrorMessage={setErrorMessage}/>
                    </div>
                    <div className="present-wrapper">
                        <Present searchResponse={searchResponse}/>
                    </div>
                </div>
            </div>
        </ContainerContext.Provider>
    );
}

export default Container;
