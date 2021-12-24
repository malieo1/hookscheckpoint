import React from 'react' ; 
const movieList = ( props) => {
    return (
        <>
         {props.movies.map((movie,index)=> (
             <div className ="d-flex justify-content-start m-3">
                 <img src ={movie.cards} alt ='the movie'/>
             </div> )
         )}
        </>
    );
};
export default movieList ;