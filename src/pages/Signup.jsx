import {useState} from 'react'
import {Link} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import {loadingStart,loginFail,loginSuccess} from '../redux/features/auth/authSlice'


const Signup = () => {
 
  const [email, setEmail] = useState('')
  const [passwords, setPasswords] = useState('')
  const auth = getAuth();
   const {user,isLoggedIn,loading} =useSelector( (store)=>store.auth)
   const dispatch =useDispatch()

  const navigate = useNavigate();
  const notify = () => toast.success(" login successful !", {
    position: "top-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
  const notifyError = () => toast.warning(" already you have account !", {
    position: "top-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });

 function handelEmail(e){
     e.preventDefault()
       dispatch(loadingStart())
   createUserWithEmailAndPassword(auth, email, passwords)
    .then((userCredential) => {
       const result=userCredential.user
          console.log(result)
       dispatch(loginSuccess({
          email: result?.email,
          displayName: result?.displayName,
          photo: result?.photoURL,
          uid: result?.uid,
       }))
       console.log(user)
       notify()
     navigate('/')
   
  })
  .catch((error) => {
    dispatch(loginFail(error.message))
    notifyError()
  });

 }


  return (
    <>
 
 <div className="min-h-screen bg-purple-400 flex justify-center items-center overflow-hidden relative">
    <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block" />
    <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block" />
    <form className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
      <div>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
          Create An Account
        </h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
          Create an account to enjoy all the services without any ads for free!
        </p>
      </div>
      <div className="space-y-4">
        <input
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
          type="text"
          placeholder="Email Addres"
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
        />
        <input
          type="text"
          value={passwords}
          onChange={(e)=>{setPasswords(e.target.value)}}
          placeholder="Password"
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
        />
      </div>
      <div className="text-center mt-6">
        <button  onClick={(e)=>{handelEmail(e)}} className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
          Create Account
        </button>
        <p className="mt-4 text-sm">
          Already Have An Account?{" "}
          <span className="underline  cursor-pointer"> <Link to={'/login'} >Login</Link> </span>
        </p>
      </div>
    </form>
    <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block" />
    <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block" />
  </div>
</>

  )
}

export default Signup