// import { lazy } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AdvertsList } from "../AdvertsList/AdvertsList"
import { Location } from "../Location/Location";
import { Filters } from "../Filters/Filters";
import css from './App.module.css'


function App() {
  // const RegisterPage = lazy(() => import());
  // const LoginPage = lazy(() => import());

const dispatch = useDispatch();

  return (
    <>
    <div className={css.appMainContainer}>
      <div>
        <Location />
        <Filters />
      </div>
      <AdvertsList  />
      </div>
    </>
  )
}

export default App
