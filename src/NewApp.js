import "./App.css";
import {
  petIncrement,
  petDecrement,
  petFavoriteIncrement,
  petFavoriteDecrement,
} from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const petFavorite = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>New component - Add Pet to Favorite</h1>
      <button onClick={() => dispatch(petFavoriteIncrement(20))}>
        Add pet
      </button>
      <button onClick={() => dispatch(petFavoriteDecrement(10))}>
        Remove pet
      </button>
      <h2>Number of favorite pets so far {petFavorite}</h2>
    </div>
  );
}

export default App;
