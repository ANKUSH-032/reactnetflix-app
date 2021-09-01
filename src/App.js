import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';
 import Netflix from './Netflix';
 import Amazon from './Amazon';

 const favseries= 'netflix';

 const FavS = () =>{
 if(favseries === 'netflix'){
     return <Netflix />;
 }else{
     return <Amazon />
 }
 };


const App=()  => (
    <>
     
      
        {/* { Sdata.map(ncard)} */}
        {/* {Sdata.map(function ncard(val){   or*/}
        {/* {Sdata.map(const ncard =(val) =>  or */}
     
        {Sdata.map((val, index) => {
            console.log(index);
       return( <Card
               Key={val.id} 
               imgsrc={val.imgsrc}
               title={val.title}
               sname={val.sname}
               link={val.link}
        />)
      }) }
      {/* <FavS />  */}
      {/* {(favseries === 'netflix') ?  <Netflix/> :  <Amazon />} */}
      </> 
);

export default App;



//function
// function myname(a,b){
// return a+babel;

// }
// //fat arrow function
// const myname= (a,b) => {   or const muyname=(a,b) => a+b;
// return a+b;
// }