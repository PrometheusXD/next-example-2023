import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text="Olá Mundo" link="#target" />);

    expect(screen.getByRole('link', { name: /Olá Mundo/i })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink text="Olá Mundo" link="#target" srcImg="image.jpg" />,
    );

    expect(screen.getByRole('img', { name: /Olá Mundo/i })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render a link with target blank', () => {
    renderTheme(
      <LogoLink text="Olá Mundo" link="#target" srcImg="image.jpg" newTab />,
    );

    expect(
      screen.getByRole('heading', { name: /Olá Mundo/i }),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text="Olá Mundo" link="#target" srcImg="image.jpg" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
