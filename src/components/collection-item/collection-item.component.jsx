import { useDispatch } from 'react-redux';
import { Button } from '../button/button.component';
import { addItem } from '../../state/cart/cart.actions';
import { formatAsMoney } from '../../utils/cart.utils';
import {
  CollectionItemContainer,
  ImageContainer,
  Image,
  ItemFooter,
  ItemName,
  ItemPrice
} from './collection-item.styles';

export const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  const add = () => dispatch(addItem(item));
  return (
    <CollectionItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemFooter>
        <ItemName>{name}</ItemName>
        <ItemPrice>{`${formatAsMoney(price)}`}</ItemPrice>
      </ItemFooter>
      <Button
        inverted
        onClick={add}
      >
        Add to cart
    </Button>
    </CollectionItemContainer>
  )
};