import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import {  useSelector } from 'react-redux';
import { selectCollectionsForPreview, selectIsFetching } from '@state/shop/shop.selectors';
import { CollectionsPreview } from '@components/collections-preview/collections-preview.component';
import { Spinner } from '@components/spinner/spinner.component';

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const selectors = createStructuredSelector({
  loading: selectIsFetching,
  collections: selectCollectionsForPreview
})

export const CollectionsOverview = () => {
  const {collections, loading } = useSelector(selectors);
  
  return loading ?
    (<Spinner />) :
    (
    <CollectionsOverviewContainer>
      {
        collections.map(
          ({ id, title, items }) => <CollectionsPreview
            key={id}
            title={title}
            items={items}
          />
        )
      }
    </CollectionsOverviewContainer>
);}