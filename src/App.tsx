/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import TopBar from "./components/TopBar";
import Index from "./pages";
import List from "./pages/list";
import classNames from "classnames";

type ViewName = "Index" | "List"

function App() {

  const [view, setView] = useState<ViewName>("Index")

  const renderView = () => {
    switch(view){
      case 'Index': return <Index />
      case 'List': return <List />
      default:
        return <Index />
    }
  }

  const changeView = (name:ViewName) => {
    setView(name)
  }

  const selectedLinkStyle = classNames(
    "text-sky-600"
  )


  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <TopBar />
      <div className="grid grid-cols-[20%_80%]">
        <nav className="p-5 bg-slate-200">
          <ul className="flex flex-col gap-3">
            <li><a href="#" className={view === 'Index' ? selectedLinkStyle : ''} onClick={() => changeView("Index")}>Dashboard</a></li>
            <li><a href="#" className={view === 'List' ? selectedLinkStyle : ''} onClick={() => changeView("List")}>List</a></li>
          </ul>
        </nav>
        <main className="p-5">
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default App;
