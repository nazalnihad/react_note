import propTypes from 'prop-types'
function Student(props) {
    return (
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : { props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}

// type of prop
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent:propTypes.bool
}
// default if no val given
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent:false
}
export default Student;