import React from 'react';

const UserCard: React.FC = (props: any) => {
    const { name, age, hobbies } = props;

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Hobbies: {hobbies.join(', ')}</p>
        </div>
    );
};

export default UserCard;
