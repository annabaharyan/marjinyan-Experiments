import React from 'react';

const UnorderedList = (props) => {
    return (
       
            <ul>
              {props.writers.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
        
    );
}

export default UnorderedList;
