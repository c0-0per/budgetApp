// import React, { useState, useEffect } from 'react';
// import Popup from "./Popup";
// import styles from './Home.module.css';
// import popupStyles from './Popup.module.css';
// import HomeIcon from './homesvg'; // Adjust the path according to your file structure
// import { useNavigate } from 'react-router-dom';
// import UserIcon from "./UserSvg";
// import bookGPTImage from './bookGPT.webp';
// import Header from './Header';
// import { useAuth } from './AuthContext';
// import videoFile from './kungFuPanda.mp4';
//
//
// function Home() {
//     const navigate = useNavigate();
//     const { isLoggedIn, username, login, logout } = useAuth(); // Use global auth state and functions
//     const [books, setBooks] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [showPopup, setShowPopup] = useState(false);
//     const [loginUsername, setLoginUsername] = useState('');
//     const [loginPassword, setLoginPassword] = useState('');
//     const [loginError, setLoginError] = useState('');
//     const [showVideo, setShowVideo] = useState(false);
//
//     useEffect(() => {
//         // Previously: checkAuthentication();
//         // Now, if needed, you can fetchBooks or perform other side effects based on isLoggedIn
//         fetchBooks();
//     }, [isLoggedIn]);
//
//
//
//     // Function to toggle the video visibility
//     const handleShowVideo = () => {
//         setShowVideo(!showVideo);
//     };
//
//     const fetchBooks = () => {
//         fetch('https://usermicroservicedocker.onrender.com/api/titles')
//             .then(response => {
//                 if (!response.ok) throw new Error('Error fetching books');
//                 return response.json();
//             })
//             .then(data => {
//                 setBooks(data); // Assuming your API returns an array of books
//             })
//             .catch(error => {
//                 console.error('Error fetching books:', error);
//                 setBooks([]); // In case of error, clear the books
//             });
//     };
//
//
//
//
//
//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };
//
//     // Step 3: Filter books based on search query before rendering
//     const filteredBooks = books.filter(book =>
//         book.nameOfBook.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         book.descriptionOfBook.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//
//     const handleLoginAttempt = async (event) => {
//         event.preventDefault();
//         const success = await login(loginUsername, loginPassword); // Directly use login from useAuth
//         if (success) {
//             setShowPopup(false);
//             // No need to set isLoggedIn or username here, as they're managed by AuthContext
//         } else {
//             setLoginError('Invalid username or password.');
//         }
//     };
//
//     if(!isLoggedIn) {
//         return (
//             <div>
//                 <h2>You need to be logged in to use this app</h2>
//                 <button onClick={() => navigate(`/login`)} className={styles.viewDetailsButton2}>
//                     Login
//                 </button>
//             </div>
//         )
//     }
//
//     return (
//         <div className={styles.App}>
//             <Header
//                 // isHomePage={true}
//                 // // searchQuery={searchQuery}
//                 // // handleSearchChange={handleSearchChange}
//             />
//
//             <main>
//                 <div className={styles.container}>
//                 {/*{!showVideo && (*/}
//                 {/*    <button className={styles.viewDetailsButton2} onClick={() => setShowVideo(true)}>Play Video</button>*/}
//                 {/*)}*/}
//                 {/*{showVideo && (*/}
//                 {/*    <video width="320" height="240" controls autoPlay>*/}
//                 {/*        <source src={videoFile} type="video/mp4" />*/}
//                 {/*        Your browser does not support the video tag.*/}
//                 {/*    </video>*/}
//                 {/*)}*/}
//                 {/*    <div className={styles.box} onClick={() => navigate('/your-finance')}>*/}
//                 {/*        <h3>Your Finance</h3>*/}
//                 {/*    </div>*/}
//                     <div className={styles.box} onClick={() => navigate('/debt')}>
//                         <h3>All Your Debts</h3>
//                     </div>
//                     <div className={styles.box} onClick={() => navigate('/goal')}>
//                         <h3>Quantity of Goals</h3>
//                     </div>
//                     {/*<div className={styles.box}>*/}
//                     {/*    <h3>Another Box</h3>*/}
//                     {/*</div>*/}
//                 </div>
//                 {/*<section className={styles.bookContainer}>*/}
//
//                 {/*    {filteredBooks.map((book) => (*/}
//                 {/*        <article key={book.id} className={styles.book}>*/}
//                 {/*            <img src={bookGPTImage} alt="Cover" className={styles.bookImg} />*/}
//                 {/*            <h4>{book.nameOfBook}</h4>*/}
//                 {/*            <p>{book.descriptionOfBook}</p>*/}
//                 {/*            {isLoggedIn && (*/}
//                 {/*                <button onClick={() => navigate(`/book/${book.id}`)} className={styles.viewDetailsButton}>*/}
//                 {/*                    View Details*/}
//                 {/*                </button>*/}
//                 {/*            )}*/}
//                 {/*        </article>*/}
//                 {/*    ))}*/}
//                 {/*</section>*/}
//             </main>
//
//
//         </div>
//     );
// }
//
// export default Home;
import React, { useState, useEffect } from 'react';
import Popup from "./Popup";
import styles from './Home.module.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Home() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth(); // Use global auth state and functions
    const [showPopup, setShowPopup] = useState(false);
    const [books, setBooks] = useState([]);



    if (!isLoggedIn) {
        return (
            <div className={styles.notLoggedInContainer}>
                <h2>You need to be logged in to use this app</h2>
                <button onClick={() => navigate(`/login`)} className={styles.viewDetailsButton2}>
                    Login
                </button>
            </div>
        );
    }

    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.mainContent}>
                <div className={styles.container}>
                    <div className={styles.box} onClick={() => navigate('/debt')}>
                        <h3>All Your Debts</h3>
                    </div>
                    <div className={styles.box} onClick={() => navigate('/goal')}>
                        <h3>Quantity of Goals</h3>
                    </div>
                    <div className={styles.box} onClick={() => navigate('/income')}>
                        <h3>Your Income</h3>
                    </div>
                    <div className={styles.box} onClick={() => navigate('/expense')}>
                        <h3>Your Expenses</h3>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
