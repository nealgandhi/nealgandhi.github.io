import logo from "./logo.svg";
import "./App.css";
import "./input.css";

function App() {
  return (
    <div className="bg-black h-screen text-white App subpixel-antialiased">
      <div className="flex flex-row justify-center">
        <img
          className="object-contain"
          src="./NealGPhoto.jpeg"
          style={{ height: "10%", width: "10%", borderRadius: "50%" }}
        ></img>
        <div className="px-[3vw] flex flex-col justify-center">
          <h1 className="text-xl font-bold basis-1/2">
            Hi <span class="wave">👋 </span> I'm Neal.
          </h1>
          <h1> CS @ UTDallas</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="px-[28vw] py-4">
          I'm a Junior studying Computer Science at the University of Texas at
          Dallas. I have an interest in Full Stack Development and Embedded
          Software Engineering.
        </p>
      </div>
      {/* <div className="grid grid-cols-1 justify-center">
        <h1 className="font-semibold text-l">
          Here are some of my projects and past experiences:
        </h1>
        <div className="flex col-span-2">
          <div className="flex-1">Capital One</div>
          <div className="flex-2">Summer 2022</div>
        </div>
        <div className="flex col-span-2">
          <div className="flex-1">Accenture</div>
          "Summer 2021"
        </div>
        <div className="flex col-span-2">
          <div className="flex-1">Recipe Browser</div>
          "July 2022"
        </div>
        <div className="flex col-span-2">
          <div className="flex-1">HackUTD Logisitcs Lead</div>
          "Jan 2021 - Present"
        </div> */}
      <ul>
        <li>Capital One Software Engineering Intern Summer 2022</li>
        <li>Accenture Data Engineering Intern Summer 2021</li>
        <li>Recipe Browser July 2022</li>
        <li>
          <a href="https://hackutd.co">HackUTD</a> Logisitcs Lead Jan 2021 -
          Present
        </li>
        {/* each will lead to a sub section/expand into more information - or have a resume type blurb */}
      </ul>
      <h1>Links:</h1>
      <ul>
        <li>Linkedin</li>
        <li>Github</li>
        <li>Resume</li>
        <li>Email</li>
      </ul>
    </div>
  );
}

export default App;
