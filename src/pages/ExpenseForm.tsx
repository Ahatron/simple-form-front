import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import expense from '../api/expense';

const base = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});

const ExpenseForm = () => {
    const [date, setDate] = useState<Date | null>(new Date());
    const [sum, setSum] = useState('');
    const [category, setCategory] = useState('');
    const [comment, setComment] = useState('');


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const transaction = {
            dateTime: date,
            sum: parseFloat(sum),
            category,
            comment,
        };

        await expense.create(transaction)
    };

    return (
        <form onSubmit={handleSubmit} className='d-flex flex-column'>
            <DatePicker className='form-control mb-3'
                selected={date} onChange={(date: Date | null) => setDate(date)} />
            <input
                className='form-control mb-3'
                type="number"
                value={sum}
                onChange={(e) => setSum(e.target.value)}
                placeholder="Sum"
                required
            />
            <select className='form-control mb-3' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
            </select>
            <textarea
                className='form-control mb-4'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Comment"
                rows={3}
            />
            <button className='btn btn-primary' type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
