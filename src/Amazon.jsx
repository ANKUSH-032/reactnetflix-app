import React from 'react';
import  Sdata from './Sdata';
import Card from './Amazon';
const Amazon = () =>{
	console.log('test');
    return(
        <Card
               Key={Sdata[3].id} 
               imgsrc={Sdata[3].imgsrc}
               title={Sdata[3].title}
               sname={Sdata[3].sname}
               link={Sdata[3].link}
        />)
};

export default Amazon;