import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MenuItem } from '@components/menu-item/menu-item.component';
import { selectSections } from '@state/directory/directory.selectors';


const DirectoryContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Directory = () => {
  const sections = useSelector(selectSections);
  return (
    <DirectoryContainer>
      {
        sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)
      }
    </DirectoryContainer>
  )}