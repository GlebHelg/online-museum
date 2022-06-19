import React from 'react';
import { isPropertySignature } from 'typescript';
import './ErrorBox.css';

interface IErrorBoxProps {
    errorMessage: string
}

function ErrorBox(props: IErrorBoxProps) {

    console.log('Error Message: ', props.errorMessage);
    return (
        <div className="error-box">
            <p>{props.errorMessage}</p>
        </div>
    );
}

export default ErrorBox;
