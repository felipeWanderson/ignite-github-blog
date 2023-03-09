import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 416px;
  width: 100%;
  background: #112131;
  border-radius: 10px;
  padding: 32px;
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
  color: #e7edf4;
`
export const PublishedAt = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #7b96b2;
`
export const CardBody = styled.div`
  width: 100%;
  height: 111px;
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #afc2d4;
  text-overflow: ellipsis;
`
