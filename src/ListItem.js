import React from 'react';

const ListItem = (props) => {
    const {key, val} = props
    return ( 
        <div key={key}>
           <p>{val.first_name}</p>
        </div>
     );
}
 
export default ListItem