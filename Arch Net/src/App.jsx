import{useRoutes as o}from"react-router-dom";import r from"./components/header/Header";import t from"./routes";import e from"./components/footer/Footer";function App(){let r=o(t);return<>

  <div className="px-4 bg-zinc-50">

  <r />

  {r}

  <e />

  </div>

  </>}export default App;