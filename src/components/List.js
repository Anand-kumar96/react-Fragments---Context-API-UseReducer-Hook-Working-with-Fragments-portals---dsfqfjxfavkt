import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    listx.map((listx)=>
      <ListItems  valuex={listx}/>
    )
  )
}

export default List;
