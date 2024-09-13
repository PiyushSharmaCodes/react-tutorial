import { useState } from 'react'
import './App.css'
import LoginBtn from './Components/Loginbtn'
import LogoutBtn from './Components/Logoutbtn'

function App() {
  const [isLogin, setIsLogin] = useState(false);

  function toggleLoginState() {
    setIsLogin(!isLogin);
  }
//⁡⁢⁢⁣Using early return⁡
  if(isLogin){
    return(
      <>
        <p>Hello, welcome to my website</p> 
        <LogoutBtn onClick={toggleLoginState} />
      </>
    )
  }
  return(
    <>
      <p>Hello, welcome to my website</p>
      <LoginBtn onClick={toggleLoginState} />
    </>
  ) 

  //⁡⁢⁣⁢Using ternary operator⁡

  // return(
  //   isLogin? <LogoutBtn onClick={toggleLoginState} /> : <LoginBtn onClick={toggleLoginState} />
  // )

//⁡⁣⁢⁢Using if-else statement⁡

  // if(isLogin){
  //   return(
  //     <>
  //       <p>Hello, welcome to my website</p>
  //       <LogoutBtn onClick={toggleLoginState} />
  //     </>
  //   )
  // }else{
  //   return(
  //     <>
  //       <p>Hello, welcome to my website</p>
  //       <LoginBtn onClick={toggleLoginState} />
  //     </>
  //   )
  // }

  //⁡⁢⁢⁡⁢⁢⁢Using Logical Operator⁡

  // return (
  //   <>
  //     <p>Hello, welcome to my website</p>
  //     {isLogin && <LogoutBtn onClick={toggleLoginState} />}
  //     {!isLogin && <LoginBtn onClick={toggleLoginState} />}
  //   </>
  // );
}

export default App;