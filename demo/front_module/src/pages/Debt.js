// // // // import React, { useEffect, useState } from 'react';
// // // // import Header from './Header';
// // // // import styles from './UserReservations.module.css'; // Your CSS module for styling
// // // // import { useAuth } from './AuthContext';
// // // //
// // // // function Goal() {
// // // //     const [goals, setGoals] = useState([]);
// // // //     const { userId } = useAuth();
// // // //
// // // //     useEffect(() => {
// // // //         if (userId) {
// // // //             fetchGoals(userId);
// // // //         }
// // // //     }, [userId]);
// // // //
// // // //     const fetchGoals = async (userId) => {
// // // //         fetch('https://financemoduledocker.onrender.com/finances/goals/all?userId=${userId}')
// // // //             .then(response => {
// // // //                 if (!response.ok) throw new Error('Error fetching goals');
// // // //                 return response.json();
// // // //             })
// // // //             .then(data => {
// // // //                 setGoals(data); // Assuming your API returns an array of goals
// // // //             })
// // // //             .catch(error => {
// // // //                 console.error('Error fetching goals:', error);
// // // //                 setGoals([]); // In case of error, clear the goals
// // // //             });
// // // //
// // // //     };
// // // //
// // // //     return (
// // // //         <div className={styles.container}>
// // // //             <Header />
// // // //             <h2>Here are all your goals {userId}</h2>
// // // //             <ul>
// // // //                 {goals.map(goal => (
// // // //                     <li key={goal.id}>
// // // //                         {goal.name}: ${goal.amount}
// // // //                     </li>
// // // //                 ))}
// // // //             </ul>
// // // //         </div>
// // // //     );
// // // // }
// // // //
// // // // export default Goal;
// // // import React, { useEffect, useState } from 'react';
// // // import { useAuth } from './AuthContext';
// // //
// // // const Goal = () => {
// // //     const { userId } = useAuth();
// // //     const [goals, setGoals] = useState([]);
// // //
// // //     useEffect(() => {
// // //         const fetchGoals = async () => {
// // //             if (!userId) {
// // //                 console.error('User ID is not available');
// // //                 return;
// // //             }
// // //
// // //             const url = `https://financemoduledocker.onrender.com/finances/goals/all?userId=${userId}`;
// // //             console.log('Fetching goals from:', url);
// // //
// // //             try {
// // //                 const response = await fetch(url);
// // //                 if (!response.ok) {
// // //                     throw new Error('Failed to fetch goals');
// // //                 }
// // //                 const data = await response.json();
// // //                 setGoals(data);
// // //                 console.log('First goal name:', data[0]?.name); // Print the name of the first goal
// // //             } catch (error) {
// // //                 console.error('Error fetching goals:', error);
// // //             }
// // //         };
// // //
// // //         if (userId) {
// // //             fetchGoals();
// // //         }
// // //     }, [userId]);
// // //
// // //     return (
// // //         <div>
// // //             <h1>Goals</h1>
// // //             {goals.map(goal => (
// // //                 <div key={goal.id}>{goal.name}</div>
// // //             ))}
// // //         </div>
// // //     );
// // // };
// // //
// // // export default Goal;
// // //
// // // import React, { useEffect, useState } from 'react';
// // // import Header from './Header';
// // // import styles from './UserReservations.module.css'; // Your CSS module for styling
// // // import { useAuth } from './AuthContext';
// // //
// // // function Goal() {
// // //     const [goals, setGoals] = useState([]);
// // //     const { userId } = useAuth();
// // //
// // //     useEffect(() => {
// // //         if (userId) {
// // //             fetchGoals(userId);
// // //         }
// // //     }, [userId]);
// // //
// // //     const fetchGoals = async (userId) => {
// // //         const url = `https://financemoduledocker.onrender.com/finances/goals/all?userId=${userId}`;
// // //         console.log('Fetching goals from:', url); // Debugging log
// // //
// // //         try {
// // //             const response = await fetch(url);
// // //             if (!response.ok) throw new Error('Error fetching goals');
// // //             const data = await response.json();
// // //             setGoals(data); // Assuming your API returns an array of goals
// // //             console.log('First goal name:', data[0]?.name); // Print the name of the first goal
// // //         } catch (error) {
// // //             console.error('Error fetching goals:', error);
// // //             setGoals([]); // In case of error, clear the goals
// // //         }
// // //     };
// // //
// // //     return (
// // //         <div className={styles.container}>
// // //             <Header />
// // //             <h2>Here are all your goals</h2>
// // //             <ul>
// // //                 {goals.map(goal => (
// // //                     <li key={goal.id}>
// // //                         {goal.name}: ${goal.amount}
// // //                     </li>
// // //                 ))}
// // //             </ul>
// // //         </div>
// // //     );
// // // }
// // //
// // // export default Goal;
// // import React, { useEffect, useState } from 'react';
// // import Header from './Header';
// // import styles from './UserReservations.module.css'; // Your CSS module for styling
// // import { useAuth } from './AuthContext';
// //
// // function Goal() {
// //     const [goals, setGoals] = useState([]);
// //     const [newGoal, setNewGoal] = useState({ name: '', amount: '' });
// //     const { userId } = useAuth();
// //
// //     useEffect(() => {
// //         if (userId) {
// //             fetchGoals(userId);
// //         }
// //     }, [userId]);
// //
// //     const fetchGoals = async (userId) => {
// //         const url = `https://financemoduledocker.onrender.com/finances/goals/all?userId=${userId}`;
// //         console.log('Fetching goals from:', url); // Debugging log
// //
// //         try {
// //             const response = await fetch(url);
// //             if (!response.ok) throw new Error('Error fetching goals');
// //             const data = await response.json();
// //             setGoals(data); // Assuming your API returns an array of goals
// //             console.log('First goal name:', data[0]?.name); // Print the name of the first goal
// //         } catch (error) {
// //             console.error('Error fetching goals:', error);
// //             setGoals([]); // In case of error, clear the goals
// //         }
// //     };
// //
// //     const addGoal = async () => {
// //         const url = `https://financemoduledocker.onrender.com/finances/goals/add-goal?userId=${userId}`;
// //         const goalData = { name: newGoal.name, amount: newGoal.amount };
// //
// //         try {
// //             const response = await fetch(url, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify(goalData),
// //             });
// //
// //             if (!response.ok) throw new Error('Error adding goal');
// //
// //             // As the backend returns an empty response body
// //             // We can just refresh the goals list after adding a new goal
// //             fetchGoals(userId); // Refresh the goals list
// //             setNewGoal({ name: '', amount: '' }); // Reset the form
// //         } catch (error) {
// //             console.error('Error adding goal:', error);
// //         }
// //     };
// //
// //     const deleteGoal = async (goalId) => {
// //         const url = `https://financemoduledocker.onrender.com/finances/goals/${goalId}?userId=${userId}`;
// //
// //         try {
// //             const response = await fetch(url, {
// //                 method: 'DELETE',
// //             });
// //             if (!response.ok) throw new Error('Error deleting goal');
// //             fetchGoals(userId); // Refresh the list of goals
// //         } catch (error) {
// //             console.error('Error deleting goal:', error);
// //         }
// //     };
// //
// //     return (
// //         <div className={styles.container}>
// //             <Header />
// //             <h2>Here are all your goals {userId}</h2>
// //             <ul>
// //                 {goals.map(goal => (
// //                     <li key={goal.id}>
// //                         {goal.name}: ${goal.amount}
// //                         <button onClick={() => deleteGoal(goal.id)}>Delete</button>
// //                     </li>
// //                 ))}
// //             </ul>
// //             <h3>Add a New Goal</h3>
// //             <input
// //                 type="text"
// //                 placeholder="Goal Name"
// //                 value={newGoal.name}
// //                 onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
// //             />
// //             <input
// //                 type="number"
// //                 placeholder="Amount"
// //                 value={newGoal.amount}
// //                 onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
// //             />
// //             <button onClick={addGoal}>Add Goal</button>
// //         </div>
// //     );
// // }
// //
// // export default Goal;
// //
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import styles from './UserReservations.module.css'; // Your CSS module for styling
// import { useAuth } from './AuthContext';
//
// function Debt() {
//     const [debts, setDebts] = useState([]);
//     const [newDebt, setNewDebt] = useState({ name: '', amount: '', dueDate: '', nameOfPersonToGiveBack: '', interestRate: '' });
//     const { userId } = useAuth();
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         if (userId) {
//             fetchDebts(userId);
//         }
//     }, [userId]);
//
//     const fetchDebts = async (userId) => {
//         const url = `https://financemoduledocker.onrender.com/finances/debts/all?userId=${userId}`;
//         console.log('Fetching debts from:', url); // Debugging log
//
//         try {
//             const response = await fetch(url);
//             const status = response.status; // Add this line to log the status
//             console.log('Response status:', status); // Log the status
//             if (!response.ok) {
//                 if (response.status === 404) {
//                     console.error('Debts not found');
//                 } else {
//                     console.error('Error fetching debts');
//                 }
//                 return;
//             }
//             const data = await response.json();
//             setDebts(data);
//             // console.log("Debt added successfully");
//
//         } catch (error) {
//             console.error('Error fetching debts:', error);
//         }
//     };
//
//     const addDebt = async () => {
//         const url = `https://financemoduledocker.onrender.com/finances/debts/add-debt?userId=${userId}`;
//         const debtData = {
//             name: newDebt.name,
//             amount: newDebt.amount,
//             dueDate: newDebt.dueDate,
//             nameOfPersonToGiveBack: newDebt.nameOfPersonToGiveBack,
//             interestRate: newDebt.interestRate
//         };
//
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(debtData),
//             });
//
//             if (!response.ok) throw new Error('Error adding debt');
//
//             // Refresh the debts list after adding a new debt
//             fetchDebts(userId); // Refresh the debts list
//             setNewDebt({ name: '', amount: '', dueDate: '', nameOfPersonToGiveBack: '', interestRate: '' }); // Reset the form
//         } catch (error) {
//             console.error('Error adding debt:', error);
//         }
//     };
//
//     const deleteDebt = async (debtId) => {
//         const url = `https://financemoduledocker.onrender.com/finances/debts/${debtId}?userId=${userId}`;
//
//         try {
//             const response = await fetch(url, {
//                 method: 'DELETE',
//             });
//             if (!response.ok) throw new Error('Error deleting debt');
//             fetchDebts(userId); // Refresh the list of debts
//         } catch (error) {
//             console.error('Error deleting debt:', error);
//         }
//     };
//
//     const handleDebtClick = (debtId) => {
//         navigate(`/debt/${debtId}`);
//     };
//
//     return (
//         <div className={styles.container}>
//             <Header />
//             <h2>Here are all your debts {userId}</h2>
//             <ul>
//                 {debts.map(debt => (
//                     <li key={debt.id} className={styles.debtItem} onClick={() => handleDebtClick(debt.id)}>
//                         {debt.name}: ${debt.amount} - Due by {new Date(debt.dueDate).toLocaleDateString()}
//                         <br />
//                         To: {debt.nameOfPersonToGiveBack} - Interest Rate: {debt.interestRate}%
//                         <button
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 deleteDebt(debt.id);
//                             }}
//                         >
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//             <h3>Add a New Debt</h3>
//             <input
//                 type="text"
//                 placeholder="Debt Name"
//                 value={newDebt.name}
//                 onChange={(e) => setNewDebt({ ...newDebt, name: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Amount"
//                 value={newDebt.amount}
//                 onChange={(e) => setNewDebt({ ...newDebt, amount: e.target.value })}
//             />
//             <input
//                 type="date"
//                 placeholder="Due Date"
//                 value={newDebt.dueDate}
//                 onChange={(e) => setNewDebt({ ...newDebt, dueDate: e.target.value })}
//             />
//             <input
//                 type="text"
//                 placeholder="Name of Person to Give Back"
//                 value={newDebt.nameOfPersonToGiveBack}
//                 onChange={(e) => setNewDebt({ ...newDebt, nameOfPersonToGiveBack: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Interest Rate"
//                 value={newDebt.interestRate}
//                 onChange={(e) => setNewDebt({ ...newDebt, interestRate: e.target.value })}
//             />
//             <button onClick={addDebt}>Add Debt</button>
//         </div>
//     );
// }
// //     const [debts, setDebts] = useState([]);
// //     const [newGoal, setNewGoal] = useState({ name: '', amount: '' });
// //     const { userId } = useAuth();
// //     const navigate = useNavigate();
// //
// //     useEffect(() => {
// //         if (userId) {
// //             fetchGoals(userId);
// //         }
// //     }, [userId]);
// //
// //     const fetchGoals = async (userId) => {
// //         const url = `https://financemoduledocker.onrender.com/finances/debts/all?userId=${userId}`;
// //         console.log('Fetching debts from:', url); // Debugging log
// //
// //         try {
// //             const response = await fetch(url);
// //             if (!response.ok) throw new Error('Error fetching debts');
// //             const data = await response.json();
// //             setDebts(data); // Assuming your API returns an array of debts
// //             console.log('First goal name:', data[0]?.name); // Print the name of the first goal
// //         } catch (error) {
// //             console.error('Error fetching debts:', error);
// //             setDebts([]); // In case of error, clear the debts
// //         }
// //     };
// //
// //     const addGoal = async () => {
// //         const url = `https://financemoduledocker.onrender.com/finances/debts/add-debt?userId=${userId}`;
// //         const goalData = { name: newGoal.name, amount: newGoal.amount , nameOfPersonToGiveBack: newGoal.nameOfPersonToGiveBack,
// //             dueDate: newGoal.dueDate, fromDate: newGoal.fromDate,interestRate: newGoal.interestRate };
// //
// //         try {
// //             const response = await fetch(url, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify(goalData),
// //             });
// //
// //             if (!response.ok) throw new Error('Error adding goal');
// //
// //             // As the backend returns an empty response body
// //             // We can just refresh the debts list after adding a new goal
// //             fetchGoals(userId); // Refresh the debts list
// //             setNewGoal({ name: '', amount: '' ,nameOfPersonToGiveBack: '',
// //                 dueDate: '', fromDate: '',interestRate: ''}); // Reset the form
// //         } catch (error) {
// //             console.error('Error adding goal:', error);
// //         }
// //     };
// //
// //     const deleteGoal = async (goalId) => {
// //         const url = `https://financemoduledocker.onrender.com/finances/debts/${goalId}?userId=${userId}`;
// //
// //         try {
// //             const response = await fetch(url, {
// //                 method: 'DELETE',
// //             });
// //             if (!response.ok) throw new Error('Error deleting goal');
// //             fetchGoals(userId); // Refresh the list of debts
// //         } catch (error) {
// //             console.error('Error deleting goal:', error);
// //         }
// //     };
// //
// //     const handleGoalClick = (goalId) => {
// //         navigate(`/goal/${goalId}`);
// //     };
// //
// //     return (
// //         <div className={styles.container}>
// //             <Header />
// //             <h2>Here are all your debts {userId}</h2>
// //             <ul className={styles.goalItem}>
// //                 {debts.map(goal => (
// //                     <li key={goal.id} onClick={() => handleGoalClick(goal.id)}>
// //                         {goal.name}: ${goal.amount}
// //                         <button
// //                             onClick={(e) => {
// //                                 e.stopPropagation();
// //                                 deleteGoal(goal.id);
// //                             }}
// //                         >
// //                             Delete
// //                         </button>
// //                     </li>
// //                 ))}
// //             </ul>
// //             <h3>Add a New Goal</h3>
// //             <input
// //                 type="text"
// //                 placeholder="Goal Name"
// //                 value={newGoal.name}
// //                 onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
// //             />
// //             <input
// //                 type="number"
// //                 placeholder="Amount"
// //                 value={newGoal.amount}
// //                 onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
// //             />
// //             <input
// //                 type="text"
// //                 placeholder="Name whom need to pay back"
// //                 value={newGoal.nameOfPersonToGiveBack}
// //                 onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
// //             />
// //             <input
// //                 type="date"
// //                 placeholder="Due date"
// //                 value={newGoal.dueDate}
// //                 onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
// //             />
// //             <input
// //                 type="date"
// //                 placeholder="From date"
// //                 value={newGoal.fromDate}
// //                 onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
// //             />
// //             <input
// //                 type="number"
// //                 placeholder="Interest date"
// //                 value={newGoal.interestRate}
// //                 onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
// //             />
// //             <button onClick={addGoal}>Add Goal</button>
// //         </div>
// //     );
// // }
//
// export default Debt;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import styles from './Debt.module.css'; // Your CSS module for styling
import { useAuth } from './AuthContext';

function Debt() {
    const [debts, setDebts] = useState([]);
    const [newDebt, setNewDebt] = useState({ name: '', amount: '', dueDate: '', nameOfPersonToGiveBack: '', interestRate: '' });
    const { userId } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            fetchDebts(userId);
        }
    }, [userId]);

    const fetchDebts = async (userId) => {
        const url = `https://financemoduledocker.onrender.com/finances/debts/all?userId=${userId}`;
        console.log('Fetching debts from:', url); // Debugging log

        try {
            const response = await fetch(url);
            const status = response.status; // Add this line to log the status
            console.log('Response status:', status); // Log the status
            if (!response.ok) {
                if (response.status === 404) {
                    console.error('Debts not found');
                } else {
                    console.error('Error fetching debts');
                }
                return;
            }
            const data = await response.json();
            setDebts(data);
            // console.log("Debt added successfully");

        } catch (error) {
            console.error('Error fetching debts:', error);
        }
    };

    const addDebt = async () => {
        const url = `https://financemoduledocker.onrender.com/finances/debts/add-debt?userId=${userId}`;
        const debtData = {
            name: newDebt.name,
            amount: newDebt.amount,
            dueDate: newDebt.dueDate,
            nameOfPersonToGiveBack: newDebt.nameOfPersonToGiveBack,
            interestRate: newDebt.interestRate
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(debtData),
            });

            if (!response.ok) throw new Error('Error adding debt');

            // Refresh the debts list after adding a new debt
            fetchDebts(userId); // Refresh the debts list
            setNewDebt({ name: '', amount: '', dueDate: '', nameOfPersonToGiveBack: '', interestRate: '' }); // Reset the form
        } catch (error) {
            console.error('Error adding debt:', error);
        }
    };

    const deleteDebt = async (debtId) => {
        const url = `https://financemoduledocker.onrender.com/finances/debts/${debtId}?userId=${userId}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Error deleting debt');
            fetchDebts(userId); // Refresh the list of debts
        } catch (error) {
            console.error('Error deleting debt:', error);
        }
    };

    const handleDebtClick = (debtId) => {
        navigate(`/debt/${debtId}`);
    };

    return (
        <div className={styles.container}>
            <Header />
            <h2 className={styles.pageTitle}>Here are all your debts {userId}</h2>
            <ul className={styles.debtList}>
                {debts.map(debt => (
                    <li key={debt.id} className={styles.debtItem} onClick={() => handleDebtClick(debt.id)}>
                        <div className={styles.debtInfo}>
                            {debt.name}: ${debt.amount} - Due by {new Date(debt.dueDate).toLocaleDateString()}
                            <br />
                            To: {debt.nameOfPersonToGiveBack} - Interest Rate: {debt.interestRate}%
                        </div>
                        <button
                            className={styles.deleteButton}
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteDebt(debt.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <h3 className={styles.addDebtTitle}>Add a New Debt</h3>
            <div className={styles.form}>
                <input
                    type="text"
                    placeholder="Debt Name"
                    value={newDebt.name}
                    onChange={(e) => setNewDebt({ ...newDebt, name: e.target.value })}
                    className={styles.inputField}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={newDebt.amount}
                    onChange={(e) => setNewDebt({ ...newDebt, amount: e.target.value })}
                    className={styles.inputField}
                />
                <input
                    type="date"
                    placeholder="Due Date"
                    value={newDebt.dueDate}
                    onChange={(e) => setNewDebt({ ...newDebt, dueDate: e.target.value })}
                    className={styles.inputField}
                />
                <input
                    type="text"
                    placeholder="Name of Person to Give Back"
                    value={newDebt.nameOfPersonToGiveBack}
                    onChange={(e) => setNewDebt({ ...newDebt, nameOfPersonToGiveBack: e.target.value })}
                    className={styles.inputField}
                />
                <input
                    type="number"
                    placeholder="Interest Rate"
                    value={newDebt.interestRate}
                    onChange={(e) => setNewDebt({ ...newDebt, interestRate: e.target.value })}
                    className={styles.inputField}
                />
                <button onClick={addDebt} className={styles.addButton}>Add Debt</button>
            </div>
        </div>
    );
}

export default Debt;