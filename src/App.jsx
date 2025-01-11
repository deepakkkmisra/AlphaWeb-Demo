import "./App.scss";
import Router from "./Routes/Router";

function App() {
  // document.addEventListener("mousemove", (e) => {
  //   const cursorElement = document.querySelector(".kursor");
  //   const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

  //   if (
  //     elementUnderCursor &&
  //     getComputedStyle(elementUnderCursor).cursor === "pointer"
  //   ) {
  //     cursorElement.classList.add("k-hover1");
  //   } else {
  //     cursorElement.classList.remove("k-hover1");
  //   }

  //   cursorElement.style.left = `${e.clientX}px`;
  //   cursorElement.style.top = `${e.clientY}px`;
  // });

  return (
    <div className="App">
    
      <Router />
    </div>
  );
}

export default App;
