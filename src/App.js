import './App.css';
import Button from './components/button/index';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline mb-7">
        Button Component
      </h1>
      <Button>Button</Button>
      <br />
      <Button color='red' textSize='small'>Button</Button>
      <Button color='red' textSize='medium'>Button</Button>
      <Button color='red' textSize='large'>Button</Button>
      <Button color='red' textSize='small' rounded={true}>Button</Button>
      <Button color='red' textSize='medium' rounded={true}>Button</Button>
      <Button color='red' textSize='large' rounded={true}>Button</Button>
<br />
      <Button color='green' textSize='small'>Button</Button>
      <Button color='green' textSize='medium'>Button</Button>
      <Button color='green' textSize='large'>Button</Button>
      <Button color='green' textSize='small' rounded={true}>Button</Button>
      <Button color='green' textSize='medium' rounded={true}>Button</Button>
      <Button color='green' textSize='large' rounded={true}>Button</Button>
      <br />
      <Button color='blue' textSize='small'>Button</Button>
      <Button color='blue' textSize='medium'>Button</Button>
      <Button color='blue' textSize='large'>Button</Button>
      <Button color='blue' textSize='small' rounded={true}>Button</Button>
      <Button color='blue' textSize='medium' rounded={true}>Button</Button>
      <Button color='blue' textSize='large' rounded={true}>Button</Button>
    </>
  );
}

export default App;