import React, { useState } from 'react';

const Expense = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [expensList, setExpenseList] = useState([]);
  const [totalAmt,setTotalAmt] = useState(0);

  const addExpense = () => {
    if (!title || !isNaN(title) || !amount) {
      alert('Give Input Correctly')
    }
    const newExpensList = {
      id: expensList.length + 1,
      title: title,
      amount: parseInt(amount),
    }
    const updateList = [...expensList, newExpensList];
    setExpenseList(updateList);
    const sum = (acc,num)=>{
      return acc+num.amount;
    }
    const total = updateList.reduce(sum,0);
    setTotalAmt(total);
    setTitle("");
    setAmount("");
  }

  const handleDelete = (id,amt)=>{
    setExpenseList(expensList.filter(list=>list.id!==id));
    setTotalAmt(totalAmt-amt);
  }

  return (
    <div className="flex justify-center items-start pt-20 flex-row gap-x-4 min-h-screen bg-gray-900 text-white">
      <div className="w-96 bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>

        {/* Total Balance */}
        <div className="bg-gray-700 p-4 rounded-md text-center mb-4">
          <h2 className="text-lg">Total Amount</h2>
          <p className="text-2xl font-semibold">${totalAmt}</p>
        </div>

        {/* Add Expense Section */}
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Expense Title"
            className="w-full p-2 mb-2 text-black rounded-md focus:outline-none bg-white"
          />
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Amount"
            className="w-full p-2 text-black rounded-md focus:outline-none bg-white"
          />
          <button onClick={addExpense} className="w-full bg-blue-500 text-white py-2 mt-2 rounded-md hover:bg-blue-600 cursor-pointer">
            Add Expense
          </button>
        </div>
      </div>
      {/* Expense List */}
      <div className="space-y-3 w-80">
        {expensList.map(list => (
          <div key={list.id} className="flex justify-between items-center bg-gray-700 p-3 gap-x-5 rounded-md w-full">
            <span>{list.title}</span>
            <span className="text-gray-300">${list.amount}</span>
            <span onClick={()=>handleDelete(list.id,list.amount)} className="bg-red-700 py-1 px-2 rounded cursor-pointer">Delete</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expense;
