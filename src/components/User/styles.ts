import styled from 'styled-components';

export const Container = styled.div`
  width: 512px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 6px;
  padding: 12px 0px 0px;
  margin: 60px auto 0px;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px 22px;
  margin-bottom: 36px;
`;

export const UserAvatar = styled.div`
  position: absolute;
  top: -73px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  .avatar {
    width: 146px;
    height: 146px;
    border-radius: 100%;
    border: 8px solid #ffffff;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 73px;
  padding: 8px 22px;
  text-align: center;

  .login {
    color: #474747;
    font-size: 14px;
  }

  .bio {
    color: #626262;
    padding: 16px 0px;
  }
`;

export const UserStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 22px;
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .item {
    color: #626262;
    font-size: 14px;
    text-transform: lowercase;
  }

  .amount {
    font-weight: bold;
  }
`;
