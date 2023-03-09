import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  max-width: 416px;
  width: 100%;
  background: ${(props) => props.theme['gray-600']};
  border-radius: 10px;
  padding: 32px;
  text-decoration: none;
  border: 1px solid ${(props) => props.theme['gray-600']};

  &:hover {
    border: 1px solid ${(props) => props.theme['gray-200']};
  }
`
export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const CardTitle = styled.strong`
  max-width: 283px;
  width: 100%;

  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: ${(props) => props.theme.white};
`
export const PublishedAt = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: ${(props) => props.theme['gray-300']};
`
export const CardBody = styled.div`
  width: 100%;
  height: 111px;
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme['gray-200']};
  text-overflow: ellipsis;
`
