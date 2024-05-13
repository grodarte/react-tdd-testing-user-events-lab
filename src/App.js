import { useState } from "react";

function App() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [likesCoding, setLikesCoding] = useState(false)
  const [likesExercising, setLikesExercising] = useState(false)
  const [likesEating, setLikesEating] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const showUsername = (e) => setUsername(e.target.value)
  const showEmail = (e) => setEmail(e.target.value)
  const checkCoding = (e) => setLikesCoding(e.target.checked)
  const checkExercising = (e) => setLikesExercising(e.target.checked)
  const checkEating = (e) => setLikesEating(e.target.checked)
  const submitForm = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <div>
        <h1>Newsletter Signup: </h1>
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="username">Your name: </label>
            <input type="text" name="username" id="username" value={username} onChange={showUsername}/>
          </div>
          <div>
            <label htmlFor="email">Your email: </label>
            <input type="text" name="email" id="email" value={email} onChange={showEmail}/>
          </div>
          <div>
            <h3>Interests (check all that apply): </h3>
            <div>
              <input 
                type="checkbox" 
                name="coding" 
                id="coding" 
                checked={likesCoding} 
                aria-checked={likesCoding}
                onChange={checkCoding}
              />
              <label htmlFor="coding">Coding</label>
            </div>
            <div>
              <input 
                type="checkbox" 
                name="exercising" 
                id="exercising" 
                checked={likesExercising} 
                aria-checked={likesExercising}
                onChange={checkExercising}
              />
              <label htmlFor="exercising">Exercising</label>
            </div>
            <div>
              <input 
                type="checkbox" 
                name="eating" 
                id="eating" 
                checked={likesEating} 
                aria-checked={likesEating}
                onChange={checkEating}
              />
              <label htmlFor="eating">Eating</label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        {formSubmitted ? <h2>Thank you for joining my newsletter!</h2> : null}
      </div>
    </main>
  );
}

export default App;
