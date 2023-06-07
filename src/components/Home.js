import React from 'react'
import Form from './Form'
import Tasks from './Tasks';

function Home() {  
  return (
    <div className="home">
      <div className="container mx-auto p-5">
        <Form />
        <Tasks/>
      </div>
    </div>
  );
}

export default Home