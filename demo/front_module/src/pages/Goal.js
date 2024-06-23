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
// // //         fetch('https://financemoduledocker.onrender.com/finances/goals/all?userId=${userId}')
// // //             .then(response => {
// // //                 if (!response.ok) throw new Error('Error fetching goals');
// // //                 return response.json();
// // //             })
// // //             .then(data => {
// // //                 setGoals(data); // Assuming your API returns an array of goals
// // //             })
// // //             .catch(error => {
// // //                 console.error('Error fetching goals:', error);
// // //                 setGoals([]); // In case of error, clear the goals
// // //             });
// // //
// // //     };
// // //
// // //     return (
// // //         <div className={styles.container}>
// // //             <Header />
// // //             <h2>Here are all your goals {userId}</h2>
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
// // import { useAuth } from './AuthContext';
// //
// // const Goal = () => {
// //     const { userId } = useAuth();
// //     const [goals, setGoals] = useState([]);
// //
// //     useEffect(() => {
// //         const fetchGoals = async () => {
// //             if (!userId) {
// //                 console.error('User ID is not available');
// //                 return;
// //             }
// //
// //             const url = `https://financemoduledocker.onrender.com/finances/goals/all?userId=${userId}`;
// //             console.log('Fetching goals from:', url);
// //
// //             try {
// //                 const response = await fetch(url);
// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch goals');
// //                 }
// //                 const data = await response.json();
// //                 setGoals(data);
// //                 console.log('First goal name:', data[0]?.name); // Print the name of the first goal
// //             } catch (error) {
// //                 console.error('Error fetching goals:', error);
// //             }
// //         };
// //
// //         if (userId) {
// //             fetchGoals();
// //         }
// //     }, [userId]);
// //
// //     return (
// //         <div>
// //             <h1>Goals</h1>
// //             {goals.map(goal => (
// //                 <div key={goal.id}>{goal.name}</div>
// //             ))}
// //         </div>
// //     );
// // };
// //
// // export default Goal;
// //
// // import React, { useEffect, useState } from 'react';
// // import Header from './Header';
// // import styles from './UserReservations.module.css'; // Your CSS module for styling
// // import { useAuth } from './AuthContext';
// //
// // function Goal() {
// //     const [goals, setGoals] = useState([]);
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
// //     return (
// //         <div className={styles.container}>
// //             <Header />
// //             <h2>Here are all your goals</h2>
// //             <ul>
// //                 {goals.map(goal => (
// //                     <li key={goal.id}>
// //                         {goal.name}: ${goal.amount}
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // }
// //
// // export default Goal;
// import React, { useEffect, useState } from 'react';
// import Header from './Header';
// import styles from './UserReservations.module.css'; // Your CSS module for styling
// import { useAuth } from './AuthContext';
//
// function Goal() {
//     const [goals, setGoals] = useState([]);
//     const [newGoal, setNewGoal] = useState({ name: '', amount: '' });
//     const { userId } = useAuth();
//
//     useEffect(() => {
//         if (userId) {
//             fetchGoals(userId);
//         }
//     }, [userId]);
//
//     const fetchGoals = async (userId) => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/all?userId=${userId}`;
//         console.log('Fetching goals from:', url); // Debugging log
//
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error('Error fetching goals');
//             const data = await response.json();
//             setGoals(data); // Assuming your API returns an array of goals
//             console.log('First goal name:', data[0]?.name); // Print the name of the first goal
//         } catch (error) {
//             console.error('Error fetching goals:', error);
//             setGoals([]); // In case of error, clear the goals
//         }
//     };
//
//     const addGoal = async () => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/add-goal?userId=${userId}`;
//         const goalData = { name: newGoal.name, amount: newGoal.amount };
//
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(goalData),
//             });
//
//             if (!response.ok) throw new Error('Error adding goal');
//
//             // As the backend returns an empty response body
//             // We can just refresh the goals list after adding a new goal
//             fetchGoals(userId); // Refresh the goals list
//             setNewGoal({ name: '', amount: '' }); // Reset the form
//         } catch (error) {
//             console.error('Error adding goal:', error);
//         }
//     };
//
//     const deleteGoal = async (goalId) => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/${goalId}?userId=${userId}`;
//
//         try {
//             const response = await fetch(url, {
//                 method: 'DELETE',
//             });
//             if (!response.ok) throw new Error('Error deleting goal');
//             fetchGoals(userId); // Refresh the list of goals
//         } catch (error) {
//             console.error('Error deleting goal:', error);
//         }
//     };
//
//     return (
//         <div className={styles.container}>
//             <Header />
//             <h2>Here are all your goals {userId}</h2>
//             <ul>
//                 {goals.map(goal => (
//                     <li key={goal.id}>
//                         {goal.name}: ${goal.amount}
//                         <button onClick={() => deleteGoal(goal.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//             <h3>Add a New Goal</h3>
//             <input
//                 type="text"
//                 placeholder="Goal Name"
//                 value={newGoal.name}
//                 onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Amount"
//                 value={newGoal.amount}
//                 onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
//             />
//             <button onClick={addGoal}>Add Goal</button>
//         </div>
//     );
// }
//
// export default Goal;
//
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import styles from './UserReservations.module.css'; // Your CSS module for styling
// import { useAuth } from './AuthContext';
//
// function Goal() {
//     const [goals, setGoals] = useState([]);
//     const [newGoal, setNewGoal] = useState({ name: '', amount: '' });
//     const { userId } = useAuth();
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         if (userId) {
//             fetchGoals(userId);
//         }
//     }, [userId]);
//
//     const fetchGoals = async (userId) => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/all?userId=${userId}`;
//         console.log('Fetching goals from:', url); // Debugging log
//
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error('Error fetching goals');
//             const data = await response.json();
//             setGoals(data); // Assuming your API returns an array of goals
//             console.log('First goal name:', data[0]?.name); // Print the name of the first goal
//         } catch (error) {
//             console.error('Error fetching goals:', error);
//             setGoals([]); // In case of error, clear the goals
//         }
//     };
//
//     const addGoal = async () => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/add-goal?userId=${userId}`;
//         const goalData = { name: newGoal.name, amount: newGoal.amount };
//
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(goalData),
//             });
//
//             if (!response.ok) throw new Error('Error adding goal');
//
//             // As the backend returns an empty response body
//             // We can just refresh the goals list after adding a new goal
//             fetchGoals(userId); // Refresh the goals list
//             setNewGoal({ name: '', amount: '' }); // Reset the form
//         } catch (error) {
//             console.error('Error adding goal:', error);
//         }
//     };
//
//     const deleteGoal = async (goalId) => {
//         const url = `https://financemoduledocker.onrender.com/finances/goals/${goalId}?userId=${userId}`;
//
//         try {
//             const response = await fetch(url, {
//                 method: 'DELETE',
//             });
//             if (!response.ok) throw new Error('Error deleting goal');
//             fetchGoals(userId); // Refresh the list of goals
//         } catch (error) {
//             console.error('Error deleting goal:', error);
//         }
//     };
//
//     const handleGoalClick = (goalId) => {
//         navigate(`/goal/${goalId}`);
//     };
//
//     return (
//         <div className={styles.container}>
//             <Header />
//             <h2>Here are all your goals {userId}</h2>
//             <ul className={styles.goalItem}>
//                 {goals.map(goal => (
//                     <li key={goal.id} onClick={() => handleGoalClick(goal.id)}>
//                         {goal.name}: ${goal.amount}
//                         <button
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 deleteGoal(goal.id);
//                             }}
//                         >
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//             <h3>Add a New Goal</h3>
//             <input
//                 type="text"
//                 placeholder="Goal Name"
//                 value={newGoal.name}
//                 onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
//             />
//             <input
//                 type="number"
//                 placeholder="Amount"
//                 value={newGoal.amount}
//                 onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
//             />
//             <button onClick={addGoal}>Add Goal</button>
//         </div>
//     );
// }
//
// export default Goal;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import styles from './Goal.module.css'; // Your CSS module for styling
import { useAuth } from './AuthContext';

function Goal() {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState({ name: '', amount: '' });
    const { userId } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            fetchGoals(userId);
        }
    }, [userId]);

    const fetchGoals = async (userId) => {
        const url = `https://financemoduledocker.onrender.com/finances/goals/all?userId=${userId}`;
        console.log('Fetching goals from:', url); // Debugging log

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error fetching goals');
            const data = await response.json();
            setGoals(data); // Assuming your API returns an array of goals
            console.log('First goal name:', data[0]?.name); // Print the name of the first goal
        } catch (error) {
            console.error('Error fetching goals:', error);
            setGoals([]); // In case of error, clear the goals
        }
    };

    const addGoal = async () => {
        const url = `https://financemoduledocker.onrender.com/finances/goals/add-goal?userId=${userId}`;
        const goalData = { name: newGoal.name, amount: newGoal.amount };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(goalData),
            });

            if (!response.ok) throw new Error('Error adding goal');

            // As the backend returns an empty response body
            // We can just refresh the goals list after adding a new goal
            fetchGoals(userId); // Refresh the goals list
            setNewGoal({ name: '', amount: '' }); // Reset the form
        } catch (error) {
            console.error('Error adding goal:', error);
        }
    };

    const deleteGoal = async (goalId) => {
        const url = `https://financemoduledocker.onrender.com/finances/goals/${goalId}?userId=${userId}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Error deleting goal');
            fetchGoals(userId); // Refresh the list of goals
        } catch (error) {
            console.error('Error deleting goal:', error);
        }
    };

    const handleGoalClick = (goalId) => {
        navigate(`/goal/${goalId}`);
    };

    return (
        <div className={styles.container}>
            <Header />
            <h2 className={styles.pageTitle}>Here are all your goals {userId}</h2>
            <ul className={styles.goalList}>
                {goals.map(goal => (
                    <li key={goal.id} className={styles.goalItem} onClick={() => handleGoalClick(goal.id)}>
                        <div className={styles.goalInfo}>
                            {goal.name}: ${goal.amount}
                        </div>
                        <button
                            className={styles.deleteButton}
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteGoal(goal.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <h3 className={styles.addGoalTitle}>Add a New Goal</h3>
            <div className={styles.form}>
                <input
                    type="text"
                    placeholder="Goal Name"
                    value={newGoal.name}
                    onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                    className={styles.inputField}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={newGoal.amount}
                    onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
                    className={styles.inputField}
                />
                <button onClick={addGoal} className={styles.addButton}>Add Goal</button>
            </div>
        </div>
    );
}

export default Goal;
