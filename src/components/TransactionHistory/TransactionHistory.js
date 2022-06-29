import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({transactions}) => {
    return (
    <table className={styles.transaction_history}>
    <thead>
    <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
    </thead>
    <tbody>
        { transactions.map(({id, type, amount, currency}) => { return(
            <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>)})
        }
    
    </tbody>
</table>)
}
TransactionHistory.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
    })).isRequired,
}
export default TransactionHistory