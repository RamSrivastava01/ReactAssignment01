function Header(props){
return(
    <>
    <h2 style ={{
    textAlign: 'center'
 }}> Third Assignment</h2>
 <h4 style ={{
    textAlign: 'center'
 }} > 
 {props.title}
 </h4>
 <hr></hr>
 </>
);
}
export default Header;