<<<<<<< HEAD
import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

=======
import logo from './logo.svg';
import './App.css';
import Header from './container/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
Hello
{/* <Header/> */}
<Navbar/>
    </div>
  );
}
>>>>>>> 6d08975e86137f78bd40cc1eddee7fa95f20367f

export default App;
