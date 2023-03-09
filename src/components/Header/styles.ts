import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  background-image: url('/src/assets/listras-header.svg');
  background-repeat: no-repeat;
  background-position: center;

  height: 18.5rem;
  background-color: ${(props) => props.theme['gray-700']};

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 896px;

  display: flex;
  align-items: center;
  justify-content: center;
`
