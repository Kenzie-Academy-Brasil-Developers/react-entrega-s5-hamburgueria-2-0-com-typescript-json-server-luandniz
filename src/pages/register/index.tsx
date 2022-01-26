import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import BurguerCombo from "../../assets/burguer2.jpg";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Container, Content, Text } from "./styles";

import { UseRegister } from "../../providers/register";

interface DataLogin {
  name: string;
  email: string;
  password: string;
}

const responseGoogle = (response: any) => {
  console.log(response);
};

export const Register = () => {
  const { registerUser } = UseRegister();
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .min(6, "Mínimo 6 dígitos")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataLogin>({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction: SubmitHandler<DataLogin> = (data: DataLogin) => {
    console.log(data);
    registerUser(data);
  };

  return (
    <Container>
      <Content>
        <img src={BurguerCombo} alt="" />
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type="text"
            placeholder="Name"
            register={register}
            text={"name"}
            error={errors.name?.message}
          />
          <Input
            type="text"
            placeholder="Email"
            register={register}
            text={"email"}
            error={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="Password"
            register={register}
            text={"password"}
            error={errors.password?.message}
          />
          <Button type="submit">Sign Up</Button>

          <Text>Have an account?</Text>

          <Button onClick={() => history.push("/")}>Sign In</Button>
        </form>
      </Content>
    </Container>
  );
};
