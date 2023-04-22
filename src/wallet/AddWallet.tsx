import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWallet } from "../store/walletReducer";

const AddWalletForm = (props: any) => {
  const dispatch = useDispatch();
  const [walletData, setWalletData] = useState({
    type: "bank",
    name: "",
    logo: "/assets/images/wallet-logo.png",
    description: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setWalletData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(addWallet(walletData));
    setWalletData({
      type: "bank",
      name: "",
      logo: "/assets/images/wallet-logo.png",
      description: "",
    });
    props.closeForm();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl font-medium mb-4">Add New Wallet</h2>
      <div className="mb-4">
        <label htmlFor="type" className="block font-medium mb-1">
          Wallet Type
        </label>
        <select
          id="type"
          name="type"
          className="w-full border rounded-md py-2 px-3"
          value={walletData.type}
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          <option value="cash">Cash</option>
          <option value="bank">Bank Account</option>
          <option value="investment">Investment</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Wallet Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Citibank Account"
          required
          className="w-full border rounded-md py-2 px-3"
          value={walletData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 hidden">
        <label htmlFor="logo" className="block font-medium mb-1">
          Wallet Logo URL
        </label>
        <input
          type="text"
          id="logo"
          name="logo"
          disabled
          className="w-full border rounded-md py-2 px-3"
          value={walletData.logo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-medium mb-1">
          Wallet Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="My Citibank Account with account number 1234XXX"
          className="w-full border rounded-md py-2 px-3"
          value={walletData.description}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Add Wallet
      </button>
    </form>
  );
};

export default AddWalletForm;
