import List from "./List";
function App() {
  const fruits = [
    { id:1,name:'banana',cal:90},
    { id:2,name:'apple',cal:45},
    { id:3,name:'orange',cal:500}
  ];
  
  const veg = [
    { id:1,name:'carrot',cal:90},
    { id:2,name:'broccoli',cal:45},
    { id:3,name:'onion',cal:500}
];
  return (
    <>    
      {fruits.length>0 && <List items={fruits} category="Fruits" />}
      {veg.length>0 ? <List items={veg} category="vegetable" /> : null}

    </>
  );
}

export default App
