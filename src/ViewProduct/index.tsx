import { View } from './view';
import { useContainer } from './container';

export function ViewProductsForm() {
  let props = useContainer();
  return (
    <View {...props}/>
  )
}