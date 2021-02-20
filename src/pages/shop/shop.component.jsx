import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { fetchCollections } from '@state/shop/shop.actions';
import { Collection } from '@components/collection/collection.component';
import { CollectionsOverview } from '@components/collections-overview/collections-overview.component';



const ShopContainer = styled.div`
  margin-bottom: 6rem;
  min-height: 100%;
`;

export const ShopPage = () => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  },[dispatch])

  return (
    <ShopContainer>
      <Switch>
        <Route exact path={url}>
          <CollectionsOverview />
        </Route>
        <Route exact path={`${url}/:collectionName`}>
          <Collection />
        </Route>
      </Switch>
    </ShopContainer>
  )
};