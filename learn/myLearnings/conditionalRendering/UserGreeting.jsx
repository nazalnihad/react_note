import propTypes from 'prop-types';
function UserGreeting(props) {
    return (props.isLoggedIn
        ? <h2>Welcome {props.username}</h2>
        :<h2>no buddy</h2>  
    )
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    name:propTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username:"guest",
}
export default UserGreeting;