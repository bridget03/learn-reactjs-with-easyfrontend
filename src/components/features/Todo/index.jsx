import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  // const match = matchPath();

  return (
    <div>
      Todo Featurekgiuh
      <Routes>
        <Route path="/todo/listpage" element={<ListPage />} />
        <Route path="todo/:todoId" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default TodoFeature;
