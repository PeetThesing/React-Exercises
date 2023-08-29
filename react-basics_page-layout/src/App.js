import "./Header.css"; // Import CSS file for Header component
import "./MainContent.css"; // Import CSS file for MainContent component
import "./Footer.css"; // Import CSS file for Footer component

function Header() {
  // Implement your JSX code here;
  return <h1 className="header">Feminipsum</h1>;
}
function MainContent() {
  // Implement your JSX code here
  return <p className="main-content">{textFeminipsum}</p>;
}

function Footer() {
  // Implement your JSX code here
  return (
    <footer className="footer">
      <p>
        Here you can find more paragraphs:{" "}
        <a href="https://feminipsum.org/"> Link</a>
      </p>
    </footer>
  );
}

function App() {
  // Render components within App
  return (
    <div className="app-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

const textFeminipsum = `Lorem Ipsum is just like sexist behaviors in creative departments. You don't pay attention, you just play around. But also, why take a dead language poem or women seriously? After all, they are just a small number in agencies. That, by the way, is inversely proportional to all the sexist and sexual jokes they hear so frequently.`;
