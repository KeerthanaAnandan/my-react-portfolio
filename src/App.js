import {React , useEffect} from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./Components/HeaderNav";
import Body from "./Components/Body";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Testimonial from "./Components/Testimonial";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Skills from "./Components/Skills";
import Pdf from "./Components/Pdf";

import PDFViewer from "./Components/PDFViewer";
import PDFJSBackend from "./Components/pdfjs";
import WebviewerBackend from './Components/WebViewer';

import mypdf from "./assets/Resume.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  
useEffect(() => {
  AOS.init();
  }, [])
  
  return (
    <Router>

      <div className="App">
        <Switch>
       <Route exact path="/"> 
          <HeaderNav />
       <Body />
       <About />
       <Skills />
       <Portfolio />
       <Testimonial />
       <Form />
       <Footer />
       </Route>
      
     
          <Route path="/pdf">
            <Pdf.js />
          </Route>
          <Route path="/resume">
            
          <PDFViewer 
          backend={WebviewerBackend}
          src={mypdf}
        /></Route> 
        </Switch>       
      </div>
  </Router>
  );
}

export default App;
