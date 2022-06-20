import React, { useState } from 'react';


interface IPaginationProps {
    activePage: number,
    setActivePage: React.Dispatch<React.SetStateAction<number>>,
    allObjects: number[]

}

function Pagination(props: IPaginationProps) {
    // this component should be improved
    // https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

    

    let imagesCount = 0;
    if(props.allObjects){
        imagesCount = props.allObjects.length;
    }

    const pagesCount = Math.ceil(imagesCount / 9);
    // console.log('imagesCount: ', imagesCount)
    // console.log('pagesCount: ', pagesCount)

    let allPageButtons: JSX.Element[];
    let activePageButtons: JSX.Element[] = [];

    const pagesArray = Array.from(Array(pagesCount+1).keys()).slice(1, -1)

    
    allPageButtons = pagesArray.map(pageNum => <button key={pageNum} onClick={
                                                () => {
                                                    props.setActivePage(pageNum)
                                                    
                                                }}>{pageNum}
    </button>)

    //let 
    if(pagesCount > 5){
        if(props.activePage < 3){
            // activePageButtons.push(allPageButtons[0]);

            allPageButtons.slice(props.activePage-2 > 0 ? props.activePage-2 : 0 , props.activePage+1)
                          .forEach(elem => activePageButtons.push(elem))
            activePageButtons.push(<span>...</span>)
            activePageButtons.push(allPageButtons[allPageButtons.length-1])
            // activePageButtons.push(allPageButtons[-1]);
        }
        else if(props.activePage == 3){
            activePageButtons.push(allPageButtons[0])
            allPageButtons.slice(props.activePage, props.activePage+1)
                          .forEach(elem => activePageButtons.push(elem))
            activePageButtons.push(<span>...</span>)
            activePageButtons.push(allPageButtons[allPageButtons.length-1])
        }
        else if(props.activePage > 3 && props.activePage < allPageButtons.length-3){
            console.log(-3);
            activePageButtons.push(allPageButtons[0])
            activePageButtons.push(<span>...</span>)

            allPageButtons.slice(props.activePage-2, props.activePage+1)
                          .forEach(elem => activePageButtons.push(elem))
            
            activePageButtons.push(<span>...</span>)
            activePageButtons.push(allPageButtons[allPageButtons.length-1])
        }
        else if(props.activePage > 3 && props.activePage < allPageButtons.length-2){
            console.log(-2);
            activePageButtons.push(allPageButtons[0])
            activePageButtons.push(<span>...</span>)
            allPageButtons.slice(props.activePage-2, props.activePage+1)
                          .forEach(elem => activePageButtons.push(elem))
            activePageButtons.push(<span>...</span>)
            activePageButtons.push(allPageButtons[allPageButtons.length-1])
        }
        else if(props.activePage > 3 && props.activePage < allPageButtons.length-1){
            console.log(-2);
            activePageButtons.push(allPageButtons[0])
            activePageButtons.push(<span>...</span>)
            allPageButtons.slice(props.activePage-2, props.activePage+1)
                          .forEach(elem => activePageButtons.push(elem))
            activePageButtons.push(allPageButtons[allPageButtons.length-1])
        }
        else{
            activePageButtons.push(allPageButtons[0])
            activePageButtons.push(<span>...</span>)
            allPageButtons.slice(props.activePage-2 > 0 ? props.activePage-2 : 0 , props.activePage+1)
                          .forEach(elem => activePageButtons.push(elem))
        }
    }
    else{
        activePageButtons = allPageButtons
    }

    //console.log(activePageButtons);
    return (
        <div className="pagination">
            {activePageButtons}
            <p>{props.activePage}</p>
        </div>
    );
}

export default Pagination;
