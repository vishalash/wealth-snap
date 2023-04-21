import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authReducer';

const Login = () => {
  const nameRef = useRef<HTMLInputElement | any>();
  const dispatch = useDispatch();
  const onNextHandler = (event: any) => {
    event.preventDefault();
    dispatch(login(nameRef.current.value));
  }
  if(typeof window !== 'undefined' && localStorage.getItem('isAuthenticated') == 'true'){
    dispatch(login(localStorage.getItem('userName')));
  }
  return (
    <div className="bg-gray-100 py-6 flex justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-light-blue-500 shadow-lg transform skew-y-0 rotate-6 sm:rotate-12 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center mb-8">Your Name Please!</h1>
          <form onSubmit={onNextHandler}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="username">Name</label>
              <input placeholder='Jon Doe/Maverick/Iron Man' ref={nameRef} className="border border-gray-400 p-2 w-full rounded-md" id="username" name="username" type="text" required />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md" type="submit">Next</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;