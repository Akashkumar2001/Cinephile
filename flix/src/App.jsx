import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';
/* below App is fat arrow function*/ 
const App=()=>{
    return(
    <>
    <h1 className="heading_style">NETFLIX ORIGINALS</h1>
    {Sdata.map((val)=>{
/*using map function to iterate through each element of the array Sdata,
and all the elements of the array is accessed by val(from the array Sdata in file Sdata.jsx), 
which is passed as parameter.
Inside map function we are using fat arrow function, 
whose function is same as that of normal function, it is used to return those required */
      return (
      <Card 
      /* Here imgsrc,title are the attributes which are created by user
      Just as img element has arrtibute src which stores the source of the image, 
      similarly imgsrc will store the source (link) of the image
      */
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
      );
    })}
    </>
    );
}
export default App;