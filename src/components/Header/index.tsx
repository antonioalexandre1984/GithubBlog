import { HeaderContainer } from './styles';
import logoSrc from '../../assets/Logo.png';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="" />
    </HeaderContainer>
  );
}
