import styled from 'styled-components'

export const RegistForm = styled.div`
  background: #ffffff;
  border-radius: 12px;
  width: 366px;
  height: 439px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 45px;
`

export const Centr = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #181818;
`

export const RegistFormAll = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 288px;
  left: 968px;
  top: 597px;
  border: none;
  background: rgba(255, 255, 255, 1);
  padding: 4px;
  color: #000000;
`
export const LogoImage = styled.img`
  width: 140px;
  height: 21px;
  color: #181818;
  margin-left: 68px;
`

export const RegistInput = styled.input`
  width: 288px;
  left: 968px;
  top: 597px;
  border: none;
  border-bottom: 1px solid #cacdd8;
  padding: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  font-family: 'StratosSkyeng';
  font-size: 18px;
`
export const RegistFormButton = styled.button`
  font-family: 'StratosSkyeng';
  font-size: 18px;
  width: 278px;
  height: 52px;
  left: 986px;
  top: 831px;
  border: 1px solid #040404;
  border-radius: 20px;
  align-self: center;
  background: rgba(88, 14, 162, 1);
  transition: all 0.3s;
  color: #ffffff;
  margin-top: 18px;
  &:hover {
    background-color: #020202;
    color: #ffffff;
    cursor: pointer;
  }
`
