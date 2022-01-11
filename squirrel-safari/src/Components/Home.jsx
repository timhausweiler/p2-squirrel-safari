import React from 'react';
import TakeWalkButton from './TakeWalkButton';

export default function Home() {
  return (
    <div>
      <img
        src= {"https://i.imgur.com/RK3UbZi.jpeg"}
        alt="Logo of Squirrel Safari"
      />
      <h1>Welcome to Squirrel Safari</h1>
      <h4>Squirrel Safari allows you to take a (vritual) walk through Central Park to learn about the local squirrel population!</h4>
      <TakeWalkButton />
      <p>Or contribute your own story to our collection</p>
    </div>
  )
}
