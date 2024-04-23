// import { useRef } from "react";
// import Button from "./components/Button";
// import Container from "./components/Container";
import Button from "./components/Button";
import Input from "./components/Input";
import Form, {type Formhandle} from "./components/Form";
import { useRef } from "react";

function App() {
  // const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<Formhandle>(null);

  function handleSave(data: unknown){
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" disabled/>
      <Input id="age" label="Your Age" type="number" />
      <Button >A Button</Button>
      <Button href="https://www.google.com" >A Link</Button>
      <Container as={Button}>Click me</Container> */}

      {/* <Input label="Test" id="test" ref={input}/> */}
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name"/>
        <Input type="number" label="Age" id="age"/>
        <p>
          <Button>Save</Button>
        </p>
      </Form>

    </main>
  );
}

export default App;
