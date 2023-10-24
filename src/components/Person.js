function Person( {name, age} ){
return(
    <>
    <h2 style={{
    textAlign: 'center'
}}>First Assignment</h2>
   
   <p style={{
    color: 'lavender',
    backgroundColor: 'red',
    padding: '#787171',
    width: '70%',
    margin: 'auto',
    marginTop: "3rem",
    borderRadius: '2rem',
    textAlign: 'center'
   }} > 

    Hello!!! my name is <strong>{name} </strong>and my age is <strong> {age}
    </strong> </p>
    <hr></hr>
    </>
);
}

export default Person