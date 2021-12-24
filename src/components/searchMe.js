import React from 'react' ;


const SearchMe =(props) => {
    return (
        <div calssName = "col col-sm-4">
            <input
             className = 'form-control'
             value = {props.value}
             onchange ={(event) => props.setSearchVaalue (event.target.value)}
             placeholder ='type in me'></input>
        </div>
    );
};

export default searchMe ; 