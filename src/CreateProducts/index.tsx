import { View } from './view';
import { useContainer } from './container';

export function ProductsForm() {
  let props = useContainer();
  return (
    <View {...props}/>
  )
}