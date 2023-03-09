import styled from 'styled-components'

export const SearchBoxContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  margin-top: 72px;
`
export const SearchBoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Title = styled.span``
export const Quantity = styled.span``
export const SearchBoxForm = styled.form`
  width: 100%;
  margin-top: 16px;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    background: ${(props) => props.theme['gray-900']};

    border: 1px solid ${(props) => props.theme['gray-500']};
    border-radius: 6px;

    input {
      width: 100%;
      border: none;
      background: transparent;
      color: ${(props) => props.theme['gray-400']};

      &::placeholder {
        color: ${(props) => props.theme['gray-400']};
      }
      &:focus {
        border: none;
        outline: 0;
        box-shadow: none;
      }
    }
  }
`
