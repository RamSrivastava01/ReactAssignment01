import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";
import Person from "./components/Person";

function App() {
  return (
    <>
    <Person name = "Ram" age = "21"/>
    <Button text = "click me" onClick = {()=> console.log('Hey there')} />
    <Header title = "Enroll in the course of physicsWallah at much affordable price and high quality content" />
    <List items = {["Java", "Python", "Javascript", "Ruby", "Perl"]}/>
    </>
  );
}

export default App;
