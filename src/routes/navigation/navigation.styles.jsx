import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 80px;
  max-width: 85%;
  display: flex;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  margin-left: 10px;
  justify-content: center;
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
