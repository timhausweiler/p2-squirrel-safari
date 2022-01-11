import React from 'react'

export default function Form(props) {
  // console.log(props);
  const { name, story } = props.input;

  return (
    <form onSubmit={props.handleSubmit}>
      <label>Your name</label>
      <br />
      <input id="name" value={name} placeholder="Your name" onChange={props.handleTextInput} ></input>
      <br />
      <label>Your observation</label>
      <br />
      <input id="story" value={story} placeholder="Your observation" onChange={props.handleTextInput} ></input>
      <br />
      <button>Submit your observation</button>
    </form>
    
  )
}
