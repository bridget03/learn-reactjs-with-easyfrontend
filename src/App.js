import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AlbumFeature from './components/features/Album';
import TodoFeature from './components/features/Todo';
import DetailPage from "./components/features/Todo/pages/DetailPage";
import ListPage from "./components/features/Todo/pages/ListPage";
import NotFound from "./components/features/NotFound"

function App() {
    return (

        <div className="App">


            <p><NavLink to="/album">Album</NavLink></p>
            <p><NavLink to="/todo">Todo</NavLink></p>
            
                <Routes>
                    <Route path="/" element={
                        <>
                            <TodoFeature/>
                            <AlbumFeature/>
                        </>
                    }/>
                        

                    <Route path="/todo" element={<TodoFeature/>}/>
                        <Route path="/todo/listpage" element={<ListPage/>}/>
                        <Route path="/todo/:todoId" element={<DetailPage/>}/>
                    {/* </Route>                */}
                    <Route path="/album" element={<AlbumFeature/>}/>

                    <Route path="*" element={<NotFound/>}/>

                </Routes>
            

        </div>

    );

}

export default App;