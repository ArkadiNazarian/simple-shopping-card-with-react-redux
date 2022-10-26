import { Provider } from "react-redux";
import { Card } from "./Card/index";
import { ProductsForm } from "./CreateProducts/index";
import { ViewProductsForm } from "./ViewProduct/index";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsForm />
        <ViewProductsForm/>
        <Card/>
      </div>
    </Provider>
  );
}