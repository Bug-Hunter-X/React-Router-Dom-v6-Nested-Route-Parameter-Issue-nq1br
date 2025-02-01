```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
          <Route path=":id" element={<ContactDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() {
  return <h1>Contact</h1>;
}

function ContactDetails() {
  const { id } = useParams();
  return (
    <h1>Contact Details</h1>
    <h2>ID: {id}</h2>
  );
}
export default App;
```