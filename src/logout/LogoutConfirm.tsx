import { format } from "date-fns"
import saveAs from "file-saver";
import { useSelector } from "react-redux";

function LogoutConfirm({ onClose }: any) {
  const allWallets = useSelector((state: any) => state.wallet.wallets);
  const userDetail = useSelector((state: any) => state.auth);

  const downloadData = () => {
    let downloadData: any = {};
    downloadData.allWallets = allWallets;
    downloadData.userDetail = userDetail;
    const json = JSON.stringify(downloadData);
    const blob = new Blob([json], { type: 'application/json' });
    saveAs(blob, 'walletsnap ' + format(new Date(), 'PPpp') + '.json');
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white rounded-md w-full max-w-md mx-4 p-6 relative">
        <button
          onClick={() => onClose(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-lg font-medium mb-4">Please download your data before you leave!</h2>
        <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-md mb-8" role="alert">
          <div className="flex">
            <div className="py-1"><span className="text-3xl">&#x1F512;</span></div>
            <div className="pl-3">
              <p className="font-bold text-lg">We respect your privacy!</p>
              <p className="text-sm">We believe that your data belongs to you.
                Therefore, we do not store, read, or sell any of your data. We encourage you to download your data before logout,
                so you can pick up right where you left off,
                without having to start over.</p>
            </div>
          </div>
        </div>
        <form>
          <div className="flex justify-end">
            <button type="button" onClick={downloadData} className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
              Download
            </button>
            <button
              type="button"
              onClick={() => onClose(true)}
              className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default LogoutConfirm;
