// import { lazy } from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { AdvertsList } from "../AdvertsList/AdvertsList"
import { fetchAdverts } from "../../redux/operations";

function App() {
  // const RegisterPage = lazy(() => import());
  // const LoginPage = lazy(() => import());

const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchAdverts())
}, [dispatch]);

  return (
    <>
    <div>
      <div>
        {/* <Location />
        <Filters /> */}
      </div>
      <AdvertsList />
      </div>
    </>
  )
}

export default App
