import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useAuth } from './AuthContext';
import styles from './ExpensePage.module.css';

function ExpensePage() {
    const { userId } = useAuth();
    const [expenses, setExpenses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newExpense, setNewExpense] = useState({ amount: '', name: '', transactionDate: '', expenseCategory: { id: '', categoryName: '' } });
    const [categoryName, setCategoryName] = useState('');
    const [sortOrder, setSortOrder] = useState('desc'); // default sorting order
    const [filterCategory, setFilterCategory] = useState('');
    const [filterAmount, setFilterAmount] = useState({ from: '', to: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            fetchExpenses();
            fetchCategories();
        }
    }, [userId, sortOrder, filterCategory, filterAmount]);

    const fetchExpenses = async () => {
        let url = `https://transactionmoduledocker.onrender.com/transactions/expenses/all_expenses_${sortOrder}?userId=${userId}`;
        if (filterCategory) {
            url = `https://transactionmoduledocker.onrender.com/transactions/expenses/expenses-by-category/${filterCategory}?userId=${userId}`;
        } else if (filterAmount.from || filterAmount.to) {
            const from = filterAmount.from || 0;
            const to = filterAmount.to || Number.MAX_VALUE;
            url = `https://transactionmoduledocker.onrender.com/transactions/expenses/filter-by-amount?from=${from}&to=${to}&userId=${userId}`;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error fetching expenses');
            const data = await response.json();
            setExpenses(data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    const fetchCategories = async () => {
        const url = `https://transactionmoduledocker.onrender.com/transactions/expenses/categories`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error fetching categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const addExpense = async () => {
        if (!newExpense.name || !newExpense.amount || !newExpense.transactionDate || !newExpense.expenseCategory.id) {
            alert('Please fill in all fields');
            return;
        }

        const url = `https://transactionmoduledocker.onrender.com/transactions/expenses/add-expense?userId=${userId}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newExpense),
            });
            if (!response.ok) throw new Error('Error adding expense');
            fetchExpenses(); // Refresh the expenses list
            setNewExpense({ amount: '', name: '', transactionDate: '', expenseCategory: { id: '', categoryName: '' } }); // Reset the form
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    const addCategory = async () => {
        if (!categoryName) {
            alert('Please enter a category name');
            return;
        }

        const url = `https://transactionmoduledocker.onrender.com/transactions/expenses/add-category`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ categoryName }),
            });
            if (!response.ok) throw new Error('Error adding category');
            fetchCategories(); // Refresh the categories list
            setCategoryName(''); // Reset the form
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    const deleteExpense = async (expenseId) => {
        const url = `https://transactionmoduledocker.onrender.com/transactions/expenses/${expenseId}?userId=${userId}`;
        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Error deleting expense');
            fetchExpenses(); // Refresh the list of expenses
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    };

    const handleExpenseChange = (e) => {
        const { name, value } = e.target;
        if (name === 'expenseCategory') {
            const selectedCategory = categories.find(category => category.id === parseInt(value));
            setNewExpense({ ...newExpense, expenseCategory: selectedCategory });
        } else {
            setNewExpense({ ...newExpense, [name]: value });
        }
    };

    const handleExpenseClick = (expenseId) => {
        navigate(`/expense/${expenseId}`);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        setFilterCategory('');
        setFilterAmount({ from: '', to: '' });
    };

    const handleCategoryFilterChange = (e) => {
        setFilterCategory(e.target.value);
        setFilterAmount({ from: '', to: '' });
    };

    const handleAmountFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterAmount((prev) => ({
            ...prev,
            [name]: value,
        }));
        setFilterCategory('');
    };

    return (
        <div className={styles.container}>
            <Header />
            <h2 className={styles.pageTitle}>Expenses</h2>
            <div className={styles.filters}>
                <select onChange={handleSortChange} value={sortOrder} className={styles.inputField}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
                <select onChange={handleCategoryFilterChange} value={filterCategory} disabled={!!filterAmount.from || !!filterAmount.to} className={styles.inputField}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.categoryName}</option>
                    ))}
                </select>
                <input
                    type="number"
                    name="from"
                    placeholder="From Amount"
                    value={filterAmount.from}
                    onChange={handleAmountFilterChange}
                    className={styles.inputField}
                    disabled={!!filterCategory}
                />
                <input
                    type="number"
                    name="to"
                    placeholder="To Amount"
                    value={filterAmount.to}
                    onChange={handleAmountFilterChange}
                    className={styles.inputField}
                    disabled={!!filterCategory}
                />
            </div>
            <ul className={styles.expenseList}>
                {expenses.map(expense => (
                    <li key={expense.id} className={styles.expenseItem} onClick={() => handleExpenseClick(expense.id)}>
                        <div className={styles.expenseInfo}>
                            {expense.name}: ${expense.amount} - {new Date(expense.transactionDate).toLocaleDateString()}
                            <br />
                            Category: {expense.expenseCategory.categoryName}
                        </div>
                        <button
                            className={styles.deleteButton}
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteExpense(expense.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <h3 className={styles.addExpenseTitle}>Add a New Expense</h3>
            <div className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Expense Name"
                    value={newExpense.name}
                    onChange={handleExpenseChange}
                    className={styles.inputField}
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={newExpense.amount}
                    onChange={handleExpenseChange}
                    className={styles.inputField}
                />
                <input
                    type="date"
                    name="transactionDate"
                    placeholder="Transaction Date"
                    value={newExpense.transactionDate}
                    onChange={handleExpenseChange}
                    className={styles.inputField}
                />
                <select name="expenseCategory" value={newExpense.expenseCategory.id} onChange={handleExpenseChange} className={styles.inputField}>
                    <option value="">Select Category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.categoryName}</option>
                    ))}
                </select>
                <button onClick={addExpense} className={styles.addButton}>Add Expense</button>
            </div>
            <h3 className={styles.addCategoryTitle}>Add a New Category</h3>
            <div className={styles.form}>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className={styles.inputField}
                />
                <button onClick={addCategory} className={styles.addButton}>Add Category</button>
            </div>
        </div>
    );
}

export default ExpensePage;
