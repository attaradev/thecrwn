import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollection, selectIsCollectionsLoaded } from '@state/shop/shop.selectors';
import { CollectionItem } from '@components/collection-item/collection-item.component';
import { CollectionContainer, CollectionItems, CollectionTitle } from './collection.styles';
import { useParams } from 'react-router-dom';
import { Spinner } from '@components/spinner/spinner.component';


export const Collection = () => {
  const { collectionName } = useParams();
  const { title, items } = useSelector(selectCollection(collectionName));
  const loaded = useSelector(selectIsCollectionsLoaded);

  return !loaded ?
    (<Spinner />) :
    (
    <CollectionContainer>
      <CollectionTitle as='h2'>{title}</CollectionTitle>
      <CollectionItems>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </CollectionItems>
    </CollectionContainer>
);}