import { Routes, Route } from "react-router-dom";

// component
import IndexLayout from "./layout/IndexLayout";
import AuthLayout from "./auth/layout/AuthLayout";

// styling
import "./app.scss";

// components
import HomePage from "./page/HomePage";
import Calendar from "./page/calendar/Calendar";
import Album from "./page/album/Album";
import Diary from "./page/diary/Diary";
import SingleDiary from "./page/diary/SingleDiary";
import NoPage from "./page/nopage/NoPage";

// auth component
import Login from "./auth/layout/pages/Login";
import Register from "./auth/layout/pages/Register";

function App() {
  console.log("app");
  return (
    <Routes>
      {/* Dashboard */}
      <Route path="/" element={<IndexLayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
      {/* Album pages */}
      <Route path="/album" element={<IndexLayout/>}>
        <Route index element={<Album/>}/>
      </Route>
      {/* Diary page */}
      <Route path="/diary" element={<IndexLayout/>}>
        <Route index element={<Diary/>}/>
        <Route path=":id" element={<SingleDiary status="show"/>}/>
        <Route path=":id/edit" element={<SingleDiary status="edit"/>}/>
      </Route>
      {/* Calendar page */}
      <Route path="/calendar" element={<IndexLayout/>}>
        <Route index element={<Calendar/>}/>
      </Route>
      {/* Auth pages */}
      <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<Login title="サインイン"/>}/>
        <Route path="register" element={<Register title="サインアップ"/>}/>
        <Route path="login/*" element={<NoPage/>}/>
        <Route path="register/*" element={<NoPage/>}/>

      </Route>
      <Route path="/*" element={<NoPage/>}/>
    </Routes>
  );
}

export default App;
