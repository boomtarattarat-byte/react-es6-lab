import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList';

function App() {
  
  const names = ['Alice', 'Bob', 'Charlie']
  const doubled = names.map(name => name.length * 2)
  console.log('Doubled lengths:', doubled)
  
  const person = {name: 'Alice', age: 25}
  const {name, age} = person;
  console.log('Destructed:', name, age);

  return (
    <div>
       <h1>React ES6 Lab</h1>
       <p>Name: {name}</p>
       <p>Age: {age}</p>

       {/*Pass names array to UserList*/}
       <UserList users={names} />
    </div>
  );
}

export default App
