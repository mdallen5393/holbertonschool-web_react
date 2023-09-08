import logo from './logo.jpg';
import './App.css';
import { checkIsIndex, getFooterCopy, getFullYear } from './utils';


const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="title">School dashboard</h1>
  </header>
);

const Body = () => (
  <body className="App-body">
    <p>Login to access the full dashboard</p>
  </body>
);

const Footer = () => (
  <footer className="App-footer">
    <p>Copyright {getFullYear()} - {getFooterCopy(checkIsIndex())}</p>
  </footer>
);

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
