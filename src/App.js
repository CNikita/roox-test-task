import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ListUsersContainer from './Components/ListUsers/ListUsersContainer';
import SortBlock from "./Components/SortBlock";
import UserProfileContainer from "./Components/UserProfile/UserProfileContainer";
import Loader from "./Components/Loader";

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => setTimeout(() => setUsers(data), 1000)) //setTimeout для демонстрации индикатора загрузки
  }, [])

  function sortUsers(sortBy) {
    let usersList = new Array(...users)
    switch (sortBy) {
      case 'по городу':
        usersList.sort((a, b) => a.address.city > b.address.city ? 1 : -1)
        break;
      case 'по компании':
        usersList.sort((a, b) => a.company.name > b.company.name ? 1 : -1)
        break;
      default:
        throw new Error(`Unknown sort type: "${sortBy}"`)
    }
    setUsers(usersList);
  }

  function waitLoadingData(component) {
    if (users.length === 0) {
      return <Loader />;
    } else {
      return component;
    }
  }
  return (
    <div className='main-app-container'>
      <SortBlock sortUsers={sortUsers} />
      <Routes>
        <Route index element={waitLoadingData(<ListUsersContainer users={users} />)} />
        <Route path=":userId" element={waitLoadingData(<UserProfileContainer users={users} />)} />
      </Routes>
    </div>
  );
}

export default App;
