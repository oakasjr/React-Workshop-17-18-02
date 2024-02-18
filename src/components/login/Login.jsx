import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useState } from "react"

const Login = () => {
  //state
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const clickLogin = async() => {
    try {
      const url = "https://workshop-react-api.vercel.app/login"
      const res = await axios.post(url,{username,password})

      const decode = jwtDecode(res.data.token)

      localStorage.setItem('token',res.data.token )
      localStorage.setItem('user_id',decode.user_id )
      setTimeout(() => {
        window.location.reload()
      },200);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-lime-100 h-screen flex justify-center items-center">
      <div className="bg-lime-300 px-40 py-5 rounded-lg shadow-lg ">
        <div className="flex justify-center items-center mb-5">
          <h2 className="text-3xl font-bold text-center">เข้าสู่ระบบ</h2>
        </div>

        Username:{username}<br />
        Password:{password}
        <div className="flex flex-col">
          <input
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
            className="border-2 border-black rounded-lg mt-2 p-2 shadow-lg" />

          <input
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className=" border-2 border-black rounded-lg mt-2 p-2 shadow-lg" />

          <button
            onClick={clickLogin}
            className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-3 rounded-lg mt-2 shadow-lg">
            เข้าสู่ระบบ
          </button>

        </div>
      </div>
    </div>
  )
}

export default Login
