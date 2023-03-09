import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  width: 100%;
  height: 168px;

  padding: 32px;

  background: ${(props) => props.theme['gray-800']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -85px;
`
export const PostHeaderLinks = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-decoration: none;
    gap: 8px;

    font-weight: 700;
    font-size: 12px;
    line-height: 160%;

    text-transform: uppercase;
    color: ${(props) => props.theme['blue-500']};
    border-bottom: 1px solid ${(props) => props.theme['gray-800']};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-500']};
    }
  }
`

export const PostHeaderTitle = styled.h2`
  margin-top: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: ${(props) => props.theme.white};
  margin-bottom: 8px;
`
export const PostHeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 32px;
`
export const PostHeaderInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['gray-300']};
  }
`
