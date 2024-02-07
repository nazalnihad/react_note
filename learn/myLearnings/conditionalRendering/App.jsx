import UserGreeting from "./UserGreeting";
function App() {
  return (
    <>    
      <UserGreeting isLoggedIn={true} username="Babu" />
      <UserGreeting isLoggedIn={false} username="Babu"/>
      
    </>
  );
}

export default App
