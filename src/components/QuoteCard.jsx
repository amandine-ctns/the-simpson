import React from 'react';

const DisplaySimpson =({quote}) => {
   console.log(quote);
    return (
        
            <div className='DisplaySimpson'>
                <img src={quote.image} alt={quote.image}  />
                <ul> 
                <li> {quote.character} </li>
                <li> {quote.quote}</li>
                </ul>
            </div>
        
    );
}


       

  export default DisplaySimpson;