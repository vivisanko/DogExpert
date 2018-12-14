import React from "react";
import "./App.css";
import AppRouter from "./components/router/AppRouter";
import NavigationPanel from "./components/navigationPanel/NavigationPanel";
import { links } from "./components/navigationPanel/navigationRoutes";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationPanel links={links} />
      </header>
      <main className="App-main">
        <AppRouter />
      </main>
      <footer className="App-footer" />
    </div>
  );
}
