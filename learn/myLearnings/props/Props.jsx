import Student from "./Student";
function Props() {
  return (
    <>    
      <Student name="Babu" age={30} isStudent={false} />
      <Student name="Ramu" age={20} isStudent={true}/>
      <Student/>
    </>
  );
}

export default Props
