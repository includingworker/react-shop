import React from "react";
import { Route, Routes } from "react-router-dom";

import NotFoundBlock from "./components/NotFoundBlock";
import MainLayout from "./layouts/MainLayout";
import Items from "./pages/Items";

const FullProduct = React.lazy(
  () => import(/* webpackChunkName: "Item" */ "./pages/FullProduct")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Items />} />
        <Route
          path="/product/:id"
          element={
            <React.Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullProduct />
            </React.Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundBlock />} />
    </Routes>
  );
}

export default App;
