// import { useState } from 'react'r
import './App.css'
import SignIn from './pages/Auth/Login/Login'
import ResetPassword from './pages/Auth/Resest-Password/ResetPassword'
import ResetRequest from './pages/Auth/Resest-Password/ResetRequest'
import HomePage from './pages/Views/HomePage'
// import SignIn from './pages/Auth/Login/Login'
// import ErrorPage400 from './pages/Error/page400/Page400'
// import ErrorPage500 from './pages/Error/page500/Page500'
// import SignUp from './pages/Auth/Register/Register'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      {/* <ErrorPage400 /> */}
      {/* <ErrorPage500 /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <ResetRequest /> */}
      {/* <ResetPassword /> */}
      <HomePage />

    </div>
  )
}

export default App
