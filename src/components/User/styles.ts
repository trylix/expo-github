import styled from 'styled-components';

export const Container = styled.div`
  width: 40vw;
  max-width: 512px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 12px 0px 0px;
  margin: 60px auto;
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

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: #6d7278;
  border-bottom: 0.5px solid rgba(109, 114, 120, 0.2);
  padding: 0px 22px 8px;
`;

export const RepositoryItem = styled.li`
  padding: 16px 22px;
  border-bottom: 0.5px solid rgba(109, 114, 120, 0.2);

  .item {
    display: flex;
    flex-direction: column;

    .name {
      color: #363636;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .description {
      color: #6d7278;
      font-size: 14px;
    }
  }

  &:hover {
    background-color: #f3f3f3;
  }
`;
