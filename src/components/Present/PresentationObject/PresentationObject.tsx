import React from 'react';


interface IPresentationObjectProps{
    objectId: number
}

function PresentationObject(props: IPresentationObjectProps) {
  return (
    <div className="presentation-object">
        {props.objectId}
    </div>
  );
}

export default PresentationObject;
