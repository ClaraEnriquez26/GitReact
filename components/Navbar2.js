import React from "react";
import {
  Container,
  Wrapper,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
} from './Styled-components2'
import { FaLeaf } from "react-icons/fa";
import CartWidget from './Cartwidget';

const Navbar = () => {

  return (
    <>
      <Container>
        <Wrapper>
          <LogoContainer>
            <FaLeaf />
            <p>
              VeganShop
            </p>
          </LogoContainer>
          <Menu>
            <MenuItem>
              <MenuItemLink>
                <div>
                  Inicio
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <div>
                  Nosotros
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <div>
                  Ubicación
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <div>
                  Contacto
                </div>
              </MenuItemLink>
            </MenuItem>
            <CartWidget />
          </Menu>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;