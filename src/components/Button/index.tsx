import ButtonStyle from "./styles"

interface IButton {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ title, onClick }: IButton) => {

  return (
    <ButtonStyle onClick={onClick}>
      {title}
    </ButtonStyle>
  )
}

export default Button;