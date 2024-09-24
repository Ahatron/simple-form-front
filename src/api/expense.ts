import base from "./base";

interface Transaction {
    dateTime: Date | null;
    sum: number;
    category: string;
    comment: string;
}

class Expense {
    async create(transaction: Transaction) {
        try {
            await base.post('/transactions', transaction);
            alert('Transaction added successfully');
        } catch (error) {
            console.error('Error adding transaction', error);
        }
    }
}

export default new Expense()