import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  height: 13.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 2rem 2.5rem;
  gap: 2rem;

  margin: -4.375rem auto 0;
`
export const Avatar = styled.div`
  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`
export const ProfileInfo = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      text-decoration: none;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;

      text-transform: uppercase;

      color: ${(props) => props.theme['blue-500']};
    }
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }
`
export const ProfileInfoLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`
export const ProfileInfoLinksItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['gray-400']};
  }
`
