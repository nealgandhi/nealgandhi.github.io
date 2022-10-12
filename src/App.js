import logo from "./logo.svg";
import "./App.css";
import "./input.css";

function App() {
  return (
    <div class="h-screen flex item-center justify-center dark:bg-gray-900 dark:text-gray-300">
      <div className="my-auto mx-64 text-center p-6 sm:p-8 grid gap-2 bg-gradient-to-b sm:bg-gradient-to-r from-indigo-200 to-blue-300 shadow-2xl dark:from-gray-700 dark:to-gray-800 rounded-3xl">
        <div className="flex flex-row justify-center">
          <img
            className="rounded-lg mb-2 sm:my-auto mx-auto"
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
          <p className="px-[8vw] py-1">
            I'm a Junior studying Computer Science at the University of Texas at
            Dallas. I have an interest in Full Stack Development and Embedded
            Software Engineering.
          </p>
        </div>
        <div>
          <ul className="inline-grid grid-cols-2 ">
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
        <div className="item-center justify-center">
          <ul className="inline-grid grid-cols-4 gap-8 leading-snug justify-center object-center">
            <li>
              <a href="https://linkedin.com/in/neal-gandhi">
                <img
                  src="./linkedin-logo.png"
                  className="object-contain h-10 w-10"
                ></img>
              </a>
            </li>
            <li>
              <a href="https://github.com/nealgandhi/">
                <img
                  src="./github-sign.png"
                  className="object-contain h-10 w-10"
                ></img>
              </a>
            </li>
            <li>
              <a href="./neal_gandhi_resume.pdf">
                <img src="./cv.png" className="object-contain h-10 w-10"></img>
              </a>
            </li>
            <li>
              <a href="mailto:gandhi.neal2002@gmail.com">
                <img
                  src="./email.png"
                  className="object-contain h-10 w-10"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
