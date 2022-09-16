import Login from "../components/Login";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
        <Navbar />
        <h1 className='homeH1'>
            🐶🐶 WOUF WOUF MIAOU MIAOU 🐱🐱
        </h1> 
        <Login />
    </>
  )
}
