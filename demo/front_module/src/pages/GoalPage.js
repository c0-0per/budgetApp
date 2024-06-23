// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { useAuth } from './AuthContext';
// // import styles from "./UserReservations.module.css";
// // import Header from "./Header"; // Assuming useAuth is in the same directory
//
// // function GoalPage() {
// //     const { id } = useParams();
// //     const [goal, setGoal] = useState(null);
// //     const { userId } = useAuth();
// //
// //     useEffect(() => {
// //         const fetchGoal = async () => {
// //             if (!userId) {
// //                 console.error('User ID is not available');
// //                 return;
// //             }
// //             const url = `https://financemoduledocker.onrender.com/finances/goals/${id}?userId=${userId}`;
// //             try {
// //                 const response = await fetch(url);
// //                 if (!response.ok) throw new Error('Error fetching goal');
// //                 const data = await response.json();
// //                 setGoal(data);
// //             } catch (error) {
// //                 console.error('Error fetching goal:', error);
// //             }
// //         };
// //
// //         fetchGoal();
// //     }, [id, userId]);
// //
// //     if (!goal) {
// //         return <div>Loading...</div>;
// //     }
// //
// //     return (
// //         <div className={styles.container}>
// //             <Header />
// //             <h2>{goal.name}</h2>
// //             <p>Amount: ${goal.amount}</p>
// //             {/* Add more fields as necessary */}
// //         </div>
// //     );
// // }
// //
// // export default GoalPage;
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Assuming useAuth is in the same directory
//
// function GoalPage() {
//     const { id } = useParams();
//     const [goal, setGoal] = useState(null);
//     const [goalHistory, setGoalHistory] = useState([]);
//     const [updatedGoal, setUpdatedGoal] = useState({ name: '', amount: '' });
//     const { userId } = useAuth();
//
//     const fetchGoal = async () => {
//         if (!userId) {
//             console.error('User ID is not available');
//             return;
//         }
//         const url = `https://financemoduledocker.onrender.com/finances/goals/${id}?userId=${userId}`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 if (response.status === 404) {
//                     console.error('Goal not found');
//                 } else {
//                     console.error('Error fetching goal');
//                 }
//                 return;
//             }
//             const text = await response.text();
//             console.log('Response text:', text); // Debugging log
//             const data = text ? JSON.parse(text) : null;
//             if (data) {
//                 setGoal(data);
//                 setUpdatedGoal({ name: data.name, amount: data.amount });
//             } else {
//                 console.error('No data found for goal');
//             }
//         } catch (error) {
//             console.error('Error fetching goal:', error);
//         }
//     };
//
//     const fetchGoalHistory = async () => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/${id}/history`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error('Error fetching goal history');
//             const data = await response.json();
//             setGoalHistory(data);
//         } catch (error) {
//             console.error('Error fetching goal history:', error);
//         }
//     };
//
//     useEffect(() => {
//         fetchGoal();
//         // fetchGoalHistory();
//     }, [id, userId]);
//
//     const updateGoal = async () => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/${id}?userId=${userId}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updatedGoal),
//             });
//             if (!response.ok) throw new Error('Error updating goal');
//             await fetchGoal();
//             // fetchGoalHistory();
//         } catch (error) {
//             console.error('Error updating goal:', error);
//         }
//     };
//
//     if (!goal) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div>
//             <h2>{goal.name}</h2>
//             <p>Amount: ${goal.amount}</p>
//             {/* Add more fields as necessary */}
//
//             <h3>Update Goal</h3>
//             <input
//                 type="text"
//                 placeholder="Goal Name"
//                 value={updatedGoal.name}
//                 onChange={(e) => setUpdatedGoal({ ...updatedGoal, name: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Amount"
//                 value={updatedGoal.amount}
//                 onChange={(e) => setUpdatedGoal({ ...updatedGoal, amount: e.target.value })}
//             />
//             <button onClick={updateGoal}>Update Goal</button>
//
//             <h3>Goal History</h3>
//             <ul>
//                 {goalHistory.map((history, index) => (
//                     <li key={index}>
//                         <p>Date: {new Date(history.date).toLocaleString()}</p>
//                         <p>Name: {history.name}</p>
//                         <p>Amount: ${history.amount}</p>
//                         {/* Add more fields as necessary */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
//
// export default GoalPage;
//
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Assuming useAuth is in the same directory
//
// function GoalPage() {
//     const { id } = useParams();
//     const [goal, setGoal] = useState(null);
//     const [goalHistory, setGoalHistory] = useState([]);
//     const [updatedGoal, setUpdatedGoal] = useState({ name: '', amount: '' });
//     const { userId } = useAuth();
//
//     const fetchGoal = async () => {
//         if (!userId) {
//             console.error('User ID is not available');
//             return;
//         }
//         const url = `https://financemoduledocker.onrender.com/finances/goals/${id}?userId=${userId}`;
//         try {
//             const response = await fetch(url);
//             const status = response.status; // Add this line to log the status
//             console.log('Response status:', status); // Log the status
//             if (!response.ok) {
//                 if (response.status === 404) {
//                     console.error('Goal not found');
//                 } else {
//                     console.error('Error fetching goal');
//                 }
//                 return;
//             }
//             const text = await response.text();
//             console.log('Response text:', text); // Debugging log
//             const data = text ? JSON.parse(text) : null;
//             if (data) {
//                 setGoal(data);
//                 setUpdatedGoal({ name: data.name, amount: data.amount });
//             } else {
//                 console.error('No data found for goal');
//             }
//         } catch (error) {
//             console.error('Error fetching goal:', error);
//         }
//     };
//
//     const fetchGoalHistory = async () => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/${id}/history`;
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error('Error fetching goal history');
//             const data = await response.json();
//             setGoalHistory(data);
//         } catch (error) {
//             console.error('Error fetching goal history:', error);
//         }
//     };
//
//     useEffect(() => {
//         fetchGoal();
//         // fetchGoalHistory();
//     }, [id, userId]);
//
//     const updateGoal = async () => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/${id}?userId=${userId}`;
//         try {
//             const response = await fetch(url, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(updatedGoal),
//             });
//             if (!response.ok) throw new Error('Error updating goal');
//             fetchGoal();
//             // fetchGoalHistory();
//         } catch (error) {
//             console.error('Error updating goal:', error);
//         }
//     };
//
//     if (!goal) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div>
//             <h2>{goal.name}</h2>
//             <p>Amount: ${goal.amount}</p>
//             {/* Add more fields as necessary */}
//
//             <h3>Update Goal</h3>
//             <input
//                 type="text"
//                 placeholder="Goal Name"
//                 value={updatedGoal.name}
//                 onChange={(e) => setUpdatedGoal({ ...updatedGoal, name: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Amount"
//                 value={updatedGoal.amount}
//                 onChange={(e) => setUpdatedGoal({ ...updatedGoal, amount: e.target.value })}
//             />
//             <button onClick={updateGoal}>Update Goal</button>
//
//             <h3>Goal History</h3>
//             <ul>
//                 {goalHistory.map((history, index) => (
//                     <li key={index}>
//                         <p>Date: {new Date(history.date).toLocaleString()}</p>
//                         <p>Name: {history.name}</p>
//                         <p>Amount: ${history.amount}</p>
//                         {/* Add more fields as necessary */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
//
// export default GoalPage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming useAuth is in the same directory
import styles from './GoalPage.module.css';
import Header from "./Header"; // Your CSS module for styling

function GoalPage() {
    const { id } = useParams();
    const [goal, setGoal] = useState(null);
    const [goalHistory, setGoalHistory] = useState([]);
    const [updatedGoal, setUpdatedGoal] = useState({ name: '', amount: '' });
    const { userId } = useAuth();

    const fetchGoal = async () => {
        if (!userId) {
            console.error('User ID is not available');
            return;
        }
        const url = `https://financemoduledocker.onrender.com/finances/goals/${id}?userId=${userId}`;
        try {
            const response = await fetch(url);
            const status = response.status; // Add this line to log the status
            console.log('Response status:', status); // Log the status
            if (!response.ok) {
                if (response.status === 404) {
                    console.error('Goal not found');
                } else {
                    console.error('Error fetching goal');
                }
                return;
            }
            const text = await response.text();
            console.log('Response text:', text); // Debugging log
            const data = text ? JSON.parse(text) : null;
            if (data) {
                setGoal(data);
                setUpdatedGoal({ name: data.name, amount: data.amount });
            } else {
                console.error('No data found for goal');
            }
        } catch (error) {
            console.error('Error fetching goal:', error);
        }
    };

    const fetchGoalHistory = async () => {
        const url = `https://financemoduledocker.onrender.com/finances/goals/${id}/history`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error fetching goal history');
            const data = await response.json();
            setGoalHistory(data);
        } catch (error) {
            console.error('Error fetching goal history:', error);
        }
    };

    useEffect(() => {
        fetchGoal();
        fetchGoalHistory();
    }, [id, userId]);

    const updateGoal = async () => {
        const url = `https://financemoduledocker.onrender.com/finances/goals/${id}?userId=${userId}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedGoal),
            });
            if (!response.ok) throw new Error('Error updating goal');
            fetchGoal();
            fetchGoalHistory();
        } catch (error) {
            console.error('Error updating goal:', error);
        }
    };

    if (!goal) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.goalPage}>
            <Header />
            <h2 className={styles.goalTitle}>{goal.name}</h2>
            <p className={styles.goalAmount}>Amount: ${goal.amount}</p>
            {/* Add more fields as necessary */}

            <div className={styles.updateGoal}>
                <h3>Update Goal</h3>
                <input
                    type="text"
                    placeholder="Goal Name"
                    value={updatedGoal.name}
                    onChange={(e) => setUpdatedGoal({ ...updatedGoal, name: e.target.value })}
                    className={styles.inputField}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={updatedGoal.amount}
                    onChange={(e) => setUpdatedGoal({ ...updatedGoal, amount: e.target.value })}
                    className={styles.inputField}
                />
                <button onClick={updateGoal} className={styles.updateButton}>Update Goal</button>
            </div>

            <div className={styles.goalHistory}>
                <h3>Goal History</h3>
                <ul>
                    {goalHistory.map((history, index) => (
                        <li key={index} className={styles.historyItem}>
                            <p>Name: {history.name}</p>
                            <p>Amount: ${history.amount}</p>
                            {/* Add more fields as necessary */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default GoalPage;
