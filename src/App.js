import logo from "./logo.svg";
import "./App.css";
import "./input.css";

function App() {
  return (
    <div class="h-screen flex item-center justify-center dark:bg-gray-900 dark:text-gray-300">
      <div className="my-auto mx-4 text-center p-6 sm:p-8 grid gap-2 bg-gradient-to-b sm:bg-gradient-to-r from-indigo-200 to-blue-300 shadow-2xl dark:from-gray-700 dark:to-gray-800 rounded-3xl">
        <div className="flex flex-row justify-center">
          <img
            className="rounded-full mb-2 sm:my-auto mx-auto"
            src="./NealGPhoto.jpeg"
            width={"25%"}
            height={"25%"}
          ></img>
        </div>
        <div className="px-[3vw] flex flex-col justify-center">
          <h1 className="text-xl font-bold basis-1/2">
            Hi <span class="wave">👋 </span> I'm Neal.
          </h1>
          <h1> CS @ UTDallas</h1>
        </div>
        <div className="flex flex-col justify-center">
          <p className="px-[25vw]">
            I'm a Junior studying Computer Science at the University of Texas at
            Dallas. I have an interest in Full Stack Development and Embedded
            Software Engineering.
          </p>
        </div>
        <div>
          <ul className="inline-grid grid-cols-2">
            <li>Capital One Software Engineering Intern</li>{" "}
            <li>Summer 2022</li>
            <li>Accenture Data Engineering Intern</li> <li>Summer 2021</li>
            <li>Recipe Browser</li>
            <li>July 2022</li>
            <li>
              <a href="https://hackutd.co">HackUTD</a> Logisitcs Lead
            </li>
            <li>Jan 2021 - Present</li>
            {/* each will lead to a sub section/expand into more information - or have a resume type blurb */}
          </ul>
        </div>
        <ul className="inline-grid grid-cols-4 leading-snug">
          <li>
            <a href="https://linkedin.com/in/neal-gandhi">Linkedin</a>
          </li>
          <li>Github</li>
          <li>Resume</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
