import logo from "./logo.svg";
import "./App.css";
import "./input.css";

function App() {
  return (
    <div className="bg-black h-screen text-white App subpixel-antialiased">
      <h1 className="pt-4 pb-2 text-xl font-bold">
        Hi <span class="wave">👋 </span> I'm Neal.
      </h1>
      <div className="flex flex-col justify-center">
        <h1> CS @ UTDallas</h1>
        <a href="https://github.com/nealgandhi/">github.com/nealgandhi</a>
        <p className="px-[28vw] py-4">
          I'm a Junior studying Computer Science at the University of Texas at
          Dallas. I have an interest in Full Stack Development and Embedded
          Software Engineering.
        </p>
        {/* insert waving emoji after hi -- figure that out */}
      </div>
      <div>
        <h1 className="font-semibold text-l">
          Here are some of my projects and past experiences:
        </h1>
        <ul>
          <li>Capital One Software Engineering Intern Summer 2022</li>
          <li>Accenture Data Engineering Intern Summer 2021</li>
          <li>Recipe Browser July 2022</li>
          <li>HackUTD Logisitcs Lead Jan 2021 - Present</li>
          {/* each will lead to a sub section/expand into more information - or have a resume type blurb */}
        </ul>
      </div>
    </div>
  );
}

export default App;
