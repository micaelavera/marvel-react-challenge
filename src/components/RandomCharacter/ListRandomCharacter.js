import React from 'react';
import RandomCharacter from './RandomCharacter';

const ListRandomCharacter = ({ randomCharacter = []}) => {
    return(
        <div className="container-randomCharacter">
            {randomCharacter.map(element => (
                <RandomCharacter 
                    name={element.name}
                    image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                    key={element.id}
                />
            ))}
        </div>
        
);
}

export default ListRandomCharacter;