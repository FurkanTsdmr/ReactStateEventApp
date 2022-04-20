import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Form from "./components/Form/Form"
function App() {
  const[text,setText] = useState("Furkan")
  return (
    <div className='custom-page'>
    <Form>
      <h2> Giriş Sayfası</h2>
      <Input value={text} placeholder = {"Bir merin giriniz"} onChange={(e)=>{setText(e.target.value)}} />

      <Input value={text} placeholder = {"Bir merin giriniz"} onChange={(e)=>{setText(e.target.value)}} />

      <Button text='Giris Yap' onClick={()=>{alert("Tıklandı")}}/>
      </Form>
    </div>
  );
}

export default App;
