import PropTypes from 'prop-types'
function List(props) {
    const itemList = props.items;
    // const fruits = [
    //     { id:1,name:'banana',cal:90},
    //     { id:2,name:'apple',cal:45},
    //     { id:3,name:'orange',cal:500}
    // ];

    // sort alphabetical
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    
    // sort numerically
    // fruits.sort((a, b) => a.cal - b.cal);

    // filter low calori fruit
    // const lowCalFruit = fruits.filter(fruit => fruit.cal > 100);

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.cal}</b>
    </li>)
    return (
        <>
        <h3>{props.category}</h3>
        <ol>
            {listItems}
            </ol>
        </>
    )
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            cal:PropTypes.number,
        })
    )

}

List.defaultProps = {
    category: "category",
    items:[],
}
export default List;