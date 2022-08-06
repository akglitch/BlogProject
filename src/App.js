
import './App.css';
import TopStories from './components/TopStories';
import Header from './components/Header';
import Fashion from './components/Fashion';
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
     <Header />
     <hr></hr>
     <Hero />
     <TopStories />  
     <Fashion />
     </div>
  );
}

export default App;
