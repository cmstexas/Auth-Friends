import React, {useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend'

const FriendsList = props => {
const [friend, setFriend] = useState([]);
useEffect(() => {
    getData();
}, []);

  const getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        setFriend(res.data);
      })
      .catch(err => console.log(err.response));
    };

    return (
        <div>
            <AddFriend />
        
    )
        {friend.map(person => (
            <Friend key={person.name} friend={friend} />
        ))}
        </div>
    );
};
        
export default FriendsList;
