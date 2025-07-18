import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import CreateQuiz from "./components/CreateQuiz"
import Profile from "./components/Profile"
import Error from "./components/Error"
import Login from "./components/Login"
import Welcome from "./components/Welcome"
import GenerateTest from "./components/GenerateTest"
import AddPrcaticeQuestion from "./components/AddPrcaticeSet"
import AddPrcaticeSet from "./components/AddPrcaticeSet"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}   />
<Route path="/signup" element={<Signup/>}   /> 
<Route path="/login" element={<Login/>}   /> 
<Route path="/home" element={<Home/>}   /> 
<Route path="/quiz" element={<Quiz/>}   /> 
<Route path="/generatetest" element={<GenerateTest/>}   /> 
<Route path="/addpracticeset" element={<AddPrcaticeSet/>}   /> 
<Route path="createquiz" element={<CreateQuiz/>}   /> 
<Route path="/profile" element={<Profile/>}   /> 
<Route path="*" element={<Error/>}   /> 
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
