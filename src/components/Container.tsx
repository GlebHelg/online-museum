import React, { useState } from 'react';
import './Container.css';
import ErrorBox from './ErrorBox/ErrorBox';
import {ISearchResponse} from './Interfaces/Interfaces';
import Search from './Search/Search';


function Container() {
    let [searchResponse, setSearchResponse] = useState<ISearchResponse>({} as ISearchResponse);
    let [errorMessage, setErrorMessage] = useState<string>("");
    
    console.log("Container errorMessage: ", errorMessage);

    return (
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
                    Present
                </div>
            </div>
        </div>
    );
}

export default Container;
