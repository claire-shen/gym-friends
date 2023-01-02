import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className = 'bg-light-blue dib br4 pa3 ma3 grow bw2 shadow-6'>
            <img alt ='profile' src={`https://avatars.dicebear.com/api/croodles/${id}:1.png`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
    )
}

export default Card; 