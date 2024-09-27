import {  apiUrl } from "@/api/api"
import { useRef } from "react"
import axios from "axios"
import { loginType } from "@/interface/logininterFace"
import { useNavigate } from "react-router-dom"

function login() {
  const navigate = useNavigate()
  const phone = useRef<loginType['phone']>('')
  const password = useRef<loginType['password']>('')

  const Registerlogin = () =>{
    const data:loginType = {
      phone: phone.current.value,
      password: password.current.value
    }
    axios.post(`${apiUrl}/api/v1/auth/login`,data)
    .then((res)=>{
        localStorage.setItem('token',res.data.data.token)
        if(res.data.data.role == "ROLE_SUPER_ADMIN"){
            navigate('/dashboard')
        }
        else if(res.data.data.role == "ROLE_MASTER"){
            navigate('/masters')
        }
        else {
            navigate('/clients')
            }
            console.log(res.data.data.role);

        }        
        )
    .catch((err)=>{
      console.log(err)
    })

    }
  return (
    <div>

      <div>
        <div id="authentication-modal"  aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 ">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Sign in
                        </h3>
                    </div>
                    <p className="text-[16px] px-5 font-normal text-gray-500 dark:text-gray-400">Login to website if you can because we don't have a login flow yet</p>
                    <div className="p-4 md:p-5">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                                <input ref={phone} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="+998 90 123 45 67" required />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input  ref={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <button onClick={Registerlogin} type="submit" className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

      </div>  
    </div>
  )
}

export default login