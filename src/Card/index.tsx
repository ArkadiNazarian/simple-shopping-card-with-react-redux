import { View } from './view';
import { useContainer } from './container';

export function Card() {
  let props = useContainer();
  return (
    <View {...props}/>
  )
}