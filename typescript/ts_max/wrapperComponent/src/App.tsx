import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" disabled/>
      <Input id="age" label="Your Age" type="number" />
      <Button >A Button</Button>
      <Button href="https://www.google.com" >A Link</Button>
    </main>
  );
}

export default App;
