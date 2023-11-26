import React from 'react'

const UserItem = ({id, name,action}) => {
  return (
    <div  className="user-item">
        <p>ID:{id}</p>
        <p>ID:{name}</p>
        <button onClick={() => action(id)}>remove </button>
    </div>
  )
}

export default UserItem
