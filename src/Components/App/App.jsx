import { lazy, Suspense } from "react";
import { Loading } from "../Loading/Loading";
import { Routes, Route } from "react-router-dom";

const CatalogPage = lazy(() => import('../../Pages/CatalogPage/CatalogPage'));
const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const FavoritePage = lazy(() => import('../../Pages/FavoritePage/FavoritePage'));

function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
    </Suspense>
    </>
  )
}

export default App
