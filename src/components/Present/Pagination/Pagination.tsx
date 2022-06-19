import React, { useState } from 'react';


interface IPaginationProps {
    currentObjects: number[],
    setCurrentObjects: React.Dispatch<React.SetStateAction<number[]>>,
    allObjects: number[]

}

function Pagination(props: IPaginationProps) {
    // this component should be improved
    // https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

    const [page, setPage] = useState<number>();

    let imagesCount = 0;
    if(props.allObjects){
        imagesCount = props.allObjects.length;
    }

    const pagesCount = Math.ceil(imagesCount / 9);
    console.log('imagesCount: ', imagesCount)
    console.log('pagesCount: ', pagesCount)

    let pageButtons: JSX.Element[];

    const pagesArray = Array.from(Array(pagesCount).keys())

    
    pageButtons = pagesArray.map(pageNum => <button key={pageNum} onClick={() => props.setCurrentObjects(props.allObjects.slice((pageNum-1)*9, pageNum*9))}>{pageNum}</button>)



    return (
        <div className="pagination">
            {pageButtons}
        </div>
    );
}

export default Pagination;
