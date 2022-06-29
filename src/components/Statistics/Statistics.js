import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) =>
{
    return (<section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
  
    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => {
        return (<li key={id} className={styles.stat_item}>
          <span className={styles.stat_label}>{label}</span>
          <span className={styles.stat_percentage}>{percentage}%</span>
        </li>);
      })}
    </ul>
  </section>)
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
    })).isRequired,
}
export default Statistics