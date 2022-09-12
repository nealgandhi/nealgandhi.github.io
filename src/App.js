import logo from "./logo.svg";
import "./App.css";
import "./input.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="font-semibold text-xl">Neal Gandhi</h1>
        <h1> Computer Science Student @ UTDallas 2024</h1>
        <a href="https://github.com/nealgandhi/">github.com/nealgandhi</a>
        <p>
          Hi. I'm Neal. I'm a Junior studying Computer Science at the University
          of Texas at Dallas. I have an interest in Full Stack Development and
          Embedded Software Engineering.
        </p>
        {/* insert waving emoji after hi -- figure that out */}
      </div>
      <div>
        <h1>Here are some of my projects and past experiences:</h1>
        <ul>
          <li>Capital One Software Engineering Intern Summer 2022</li>
          <li>Accenture Data Engineering Intern Summer 2021</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
