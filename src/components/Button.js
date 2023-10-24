function Button({text, onClick}){
return(
<>
<h2 style={{
    textAlign: 'center'
}}>Second Assignment</h2>
<button onClick = {onClick} style = {{
        backgroundColor: '#7676e9',
        border: 'none', 
        padding: '10px',
        borderRadius: '10px',
        padding:'10px',
        color: 'white',
        display: "flex",
        margin: '0 auto',
        textAlign: 'center'
}}>
    {text}
</button>
<hr></hr>
</>
);
}

export default Button;