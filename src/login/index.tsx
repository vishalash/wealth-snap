import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authReducer';
import { addAllWallet } from '../store/walletReducer';

const Login = () => {
  const nameRef = useRef<HTMLInputElement | any>();
  const dispatch = useDispatch();
  const onNextHandler = (event: any) => {
    event.preventDefault();
    dispatch(login(nameRef.current.value));
  }
  if (typeof window !== 'undefined' && localStorage.getItem('isAuthenticated') == 'true') {
    dispatch(login(localStorage.getItem('userName')));
  }
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'utf-8');
      reader.onload = (event) => {
        const json = event.target?.result as string;
        const data = JSON.parse(json);
        if (data.allWallets && data.userDetail) {
          dispatch(addAllWallet(data.allWallets));
          dispatch(login(data.userDetail.userInfo.name));
        }
      };
    }
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

          <div className="my-8">
            <div className="border-t-2 border-gray-300"></div>
            <label htmlFor="file-upload" className="block text-gray-700 font-bold mt-6 mb-2">
              Or start with your existing data:
            </label>
            <div className="flex items-center mt-2">
              <label htmlFor="file-upload" className="relative flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <span>Upload</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".json" />
              </label>
              <span className="ml-2 text-gray-500">(JSON file downloaded from WealthSnap)</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Login;