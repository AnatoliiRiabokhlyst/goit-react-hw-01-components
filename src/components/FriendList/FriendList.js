import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (<ul className={styles.friend_list}>
    {friends.map(({avatar, name, isOnline, id}) => {
        return (
            <li key={id} className={styles.item}>
<span className={isOnline ? styles.isOn : styles.isOff}></span>
<img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
<p className={styles.name}>{name}</p>
</li>
        )
    })}
</ul>)
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
    })).isRequired,
}
export default FriendList