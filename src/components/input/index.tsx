import { InputHTMLAttributes, ReactNode } from "react";
import { InputContent, InputConteiner } from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register?: any;
  text?: string;
  icon?: ReactNode;
}

export const Input = ({ error, register, text, icon, ...rest }: InputProps) => {
  return (
    <div>
      <InputConteiner>
        {icon && { icon }}
        <InputContent {...register(text)} {...rest} />
      </InputConteiner>
      {/* <div>{error && <small>{error}</small>}</div> */}
    </div>
  );
};

export default Input;
