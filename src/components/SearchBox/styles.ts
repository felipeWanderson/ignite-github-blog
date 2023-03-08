import styled from 'styled-components'

export const SearchBoxContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  height: 13.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
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
    background: #040f1a;

    border: 1px solid #1c2f41;
    border-radius: 6px;

    input {
      width: 100%;
      border: none;
      background: transparent;
      color: #3a536b;

      &::placeholder {
        color: #3a536b;
      }
      &:focus {
        border: none;
        outline: 0;
        box-shadow: none;
      }
    }
  }
`
