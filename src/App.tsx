import { Provider } from "react-redux";
import { Card } from "./Card/view";
import { ProductsForm } from "./Products/view";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsForm />
        <Card/>
      </div>
    </Provider>
  );
}