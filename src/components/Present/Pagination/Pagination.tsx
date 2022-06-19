import React from 'react';


interface IPaginationProps {
    currentObjects: number[],
    setCurrentObjects: React.Dispatch<React.SetStateAction<number[]>>,
    allObjects?: number[]

}

function Pagination(props: IPaginationProps) {
  return (
    <div className="pagination">
    </div>
  );
}

export default Pagination;
