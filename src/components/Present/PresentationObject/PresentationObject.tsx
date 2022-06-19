import axios from 'axios';
import React, { useState, useContext, useRef, useMemo } from 'react';
import { IObjectResponse } from '../../Interfaces/Interfaces';
import {ContainerContext} from '../../Container';
import './PresentationObject.css';

const getPresentationObject = ( oid: number, 
                                setPresentationObject: React.Dispatch<React.SetStateAction<IObjectResponse>>,
                                setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>,
                                countRef: React.MutableRefObject<number>) => {
    const requestString = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${oid}`;

    countRef.current++;
    console.log('Doing axios.get');
    axios.get(requestString)
        .then(resp => {
            const respData: IObjectResponse = resp.data as IObjectResponse;
            console.log('respData PresentationObject: ', respData);
            setPresentationObject(respData);
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

interface IPresentationObjectProps{
    objectId: number
}

function PresentationObject(props: IPresentationObjectProps) {

    const [presentationObject, setPresentationObject] = useState<IObjectResponse>({} as IObjectResponse);
    const setErrorMessage = useContext(ContainerContext);
    const countRef = useRef(0);
    useMemo(() => countRef.current=0, [props.objectId]) 



    //console.log('setErrorMessage: ', setErrorMessage);
    //console.log('presentationObject: ', presentationObject);
    
    //console.log('countRef.current: ', countRef.current);

    if(countRef.current == 0){
        //console.log('Doing getPresObj');
        getPresentationObject(props.objectId, setPresentationObject, setErrorMessage as React.Dispatch<React.SetStateAction<string | null>>, countRef);
    }

    return (
        <div className="presentation-object">
            <img src={presentationObject.primaryImage} />
        </div>
    );
}

export default PresentationObject;
