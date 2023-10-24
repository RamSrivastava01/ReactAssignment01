function List({items}){
    const listItems = items.map((item) =>{
        return <li>{item}</li>
    })
return(
    <>
    <h2 style = {{
        textAlign: 'center'
    }}>Fourth Assignment</h2>
<ul style= {{
    textAlign: 'center',
    listStyleType: 'none'
}}>{listItems}</ul>
</>
)
}
export default List;