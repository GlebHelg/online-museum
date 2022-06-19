import React from 'react';
import { isPropertySignature } from 'typescript';
import './ErrorBox.css';

interface IErrorBoxProps {
    errorMessage: string | null
}

function ErrorBox(props: IErrorBoxProps) {

    console.log('Error Message: ', props.errorMessage);

    const errorJsx = <div className="error-box">
                        <p>{props.errorMessage}</p>
                    </div>;

    return (
        props.errorMessage ? errorJsx : <></>
    );
}

export default ErrorBox;
