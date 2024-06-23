// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Assuming useAuth is in the same directory
//
// function DebtPage() {
//     const { id } = useParams();
//     const [debt, setDebt] = useState(null);
//     const [updatedDebt, setUpdatedDebt] = useState({ name: '', amount: '', dueDate: '', nameOfPersonToGiveBack: '', interestRate: '' });
//     const [interest, setInterest] = useState(null);
//     const [strategy, setStrategy] = useState(1); // Default to strategy 1
//     const { userId } = useAuth();
//
//     const fetchDebt = async () => {
//         if (!userId) {
//             console.error('User ID is not available');
//             return;
//         }
//         const url = `https://financemoduledocker.onrender.com/finances/debts/${id}?userId=${userId}`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error('Error fetching debt');
//             const data = await response.json();
//             setDebt(data);
//             setUpdatedDebt({
//                 name: data.name,
//                 amount: data.amount,
//                 dueDate: data.dueDate,
//                 nameOfPersonToGiveBack: data.nameOfPersonToGiveBack,
//                 interestRate: data.interestRate
//             });
//         } catch (error) {
//             console.error('Error fetching debt:', error);
//         }
//     };
//
//     useEffect(() => {
//         fetchDebt();
//     }, [id, userId]);
//
//     const updateDebt = async () => {
//         const url = `https://financemoduledocker.onrender.com/finances/debts/${id}?userId=${userId}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updatedDebt),
//             });
//             if (!response.ok) throw new Error('Error updating debt');
//             fetchDebt(); // Refresh the debt details
//         } catch (error) {
//             console.error('Error updating debt:', error);
//         }
//     };
//
//     const setCalculationStrategy = async (strategyNumber) => {
//         const url = `https://financemoduledocker.onrender.com/finances/debts/${id}/set-calculation-strategy?userId=${userId}&numberOfStrategy=${strategyNumber}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             if (!response.ok) throw new Error('Error setting calculation strategy');
//         } catch (error) {
//             console.error('Error setting calculation strategy:', error);
//         }
//     };
//
//     const fetchInterestRate = async () => {
//         await setCalculationStrategy(strategy); // Set the strategy before calculating interest
//         const url = `https://financemoduledocker.onrender.com/finances/debts/${id}/interest-rate?userId=${userId}`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error('Error fetching interest rate');
//             const data = await response.json();
//             setInterest(data);
//         } catch (error) {
//             console.error('Error fetching interest rate:', error);
//         }
//     };
//
//     if (!debt) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div>
//             <h2>{debt.name}</h2>
//             <p>Amount: ${debt.amount}</p>
//             <p>Due Date: {new Date(debt.dueDate).toLocaleDateString()}</p>
//             <p>To: {debt.nameOfPersonToGiveBack}</p>
//             <p>Interest Rate: {debt.interestRate}%</p>
//
//             <div>
//                 <label htmlFor="strategy">Select Interest Calculation Strategy:</label>
//                 <select
//                     id="strategy"
//                     value={strategy}
//                     onChange={(e) => setStrategy(parseInt(e.target.value))}
//                 >
//                     <option value={1}>Compound Interest</option>
//                     <option value={2}>Simple Interest</option>
//                 </select>
//                 <button onClick={fetchInterestRate}>Calculate Interest</button>
//                 {interest !== null && <p>Calculated Interest: ${interest}</p>}
//             </div>
//
//             <h3>Update Debt</h3>
//             <input
//                 type="text"
//                 placeholder="Debt Name"
//                 value={updatedDebt.name}
//                 onChange={(e) => setUpdatedDebt({ ...updatedDebt, name: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Amount"
//                 value={updatedDebt.amount}
//                 onChange={(e) => setUpdatedDebt({ ...updatedDebt, amount: e.target.value })}
//             />
//             <input
//                 type="date"
//                 placeholder="Due Date"
//                 value={updatedDebt.dueDate}
//                 onChange={(e) => setUpdatedDebt({ ...updatedDebt, dueDate: e.target.value })}
//             />
//             <input
//                 type="text"
//                 placeholder="Name of Person to Give Back"
//                 value={updatedDebt.nameOfPersonToGiveBack}
//                 onChange={(e) => setUpdatedDebt({ ...updatedDebt, nameOfPersonToGiveBack: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Interest Rate"
//                 value={updatedDebt.interestRate}
//                 onChange={(e) => setUpdatedDebt({ ...updatedDebt, interestRate: e.target.value })}
//             />
//             <button onClick={updateDebt}>Update Debt</button>
//         </div>
//     );
// }
//
// export default DebtPage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming useAuth is in the same directory
import styles from './DebtPage.module.css';
import Header from "./Header";

function DebtPage() {
    const { id } = useParams();
    const [debt, setDebt] = useState(null);
    const [updatedDebt, setUpdatedDebt] = useState({ name: '', amount: '', dueDate: '', nameOfPersonToGiveBack: '', interestRate: '' });
    const [interest, setInterest] = useState(null);
    const [strategy, setStrategy] = useState(1); // Default to strategy 1
    const { userId } = useAuth();

    const fetchDebt = async () => {
        if (!userId) {
            console.error('User ID is not available');
            return;
        }
        const url = `https://financemoduledocker.onrender.com/finances/debts/${id}?userId=${userId}`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error fetching debt');
            const data = await response.json();
            setDebt(data);
            setUpdatedDebt({
                name: data.name,
                amount: data.amount,
                dueDate: data.dueDate,
                nameOfPersonToGiveBack: data.nameOfPersonToGiveBack,
                interestRate: data.interestRate
            });
        } catch (error) {
            console.error('Error fetching debt:', error);
        }
    };

    useEffect(() => {
        fetchDebt();
    }, [id, userId]);

    const updateDebt = async () => {
        const url = `https://financemoduledocker.onrender.com/finances/debts/${id}?userId=${userId}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedDebt),
            });
            if (!response.ok) throw new Error('Error updating debt');
            fetchDebt(); // Refresh the debt details
        } catch (error) {
            console.error('Error updating debt:', error);
        }
    };

    const setCalculationStrategy = async (strategyNumber) => {
        const url = `https://financemoduledocker.onrender.com/finances/debts/${id}/set-calculation-strategy?userId=${userId}&numberOfStrategy=${strategyNumber}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) throw new Error('Error setting calculation strategy');
        } catch (error) {
            console.error('Error setting calculation strategy:', error);
        }
    };

    const fetchInterestRate = async () => {
        await setCalculationStrategy(strategy); // Set the strategy before calculating interest
        const url = `https://financemoduledocker.onrender.com/finances/debts/${id}/interest-rate?userId=${userId}`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error fetching interest rate');
            const data = await response.json();
            setInterest(data);
        } catch (error) {
            console.error('Error fetching interest rate:', error);
        }
    };

    if (!debt) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <div className={styles.debtPage}>
                <h2 className={styles.debtTitle}>{debt.name}</h2>
                <div className={styles.debtDetails}>
                    <p>Amount: ${debt.amount}</p>
                    <p>Due Date: {new Date(debt.dueDate).toLocaleDateString()}</p>
                    <p>To: {debt.nameOfPersonToGiveBack}</p>
                    <p>Interest Rate: {debt.interestRate}%</p>
                </div>

                <div className={styles.interestCalculation}>
                    <label htmlFor="strategy">Select Interest Calculation Strategy:</label>
                    <select
                        id="strategy"
                        value={strategy}
                        onChange={(e) => setStrategy(parseInt(e.target.value))}
                        className={styles.strategySelect}
                    >
                        <option value={1}>Compound Interest</option>
                        <option value={2}>Simple Interest</option>
                    </select>
                    <button onClick={fetchInterestRate} className={styles.calculateButton}>Calculate Interest</button>
                    {interest !== null && <p className={styles.interestResult}>Calculated Interest: ${interest}</p>}
                </div>

                <div className={styles.updateDebt}>
                    <h3>Update Debt</h3>
                    <input
                        type="text"
                        placeholder="Debt Name"
                        value={updatedDebt.name}
                        onChange={(e) => setUpdatedDebt({ ...updatedDebt, name: e.target.value })}
                        className={styles.inputField}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={updatedDebt.amount}
                        onChange={(e) => setUpdatedDebt({ ...updatedDebt, amount: e.target.value })}
                        className={styles.inputField}
                    />
                    <input
                        type="date"
                        placeholder="Due Date"
                        value={updatedDebt.dueDate}
                        onChange={(e) => setUpdatedDebt({ ...updatedDebt, dueDate: e.target.value })}
                        className={styles.inputField}
                    />
                    <input
                        type="text"
                        placeholder="Name of Person to Give Back"
                        value={updatedDebt.nameOfPersonToGiveBack}
                        onChange={(e) => setUpdatedDebt({ ...updatedDebt, nameOfPersonToGiveBack: e.target.value })}
                        className={styles.inputField}
                    />
                    <input
                        type="number"
                        placeholder="Interest Rate"
                        value={updatedDebt.interestRate}
                        onChange={(e) => setUpdatedDebt({ ...updatedDebt, interestRate: e.target.value })}
                        className={styles.inputField}
                    />
                    <button onClick={updateDebt} className={styles.updateButton}>Update Debt</button>
                </div>
            </div>
        </div>
    );
}

export default DebtPage;