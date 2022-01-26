import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Container, Content, Text } from "./styles";
import Burguer from "../../assets/burguer.jpg";
import * as yup from "yup";

import { Button } from "../../components/button";
import Input from "../../components/input";

import { UseLogin } from "../../providers/login";

interface DataLogin {
  email: string;
  password: string;
}

export const Login = () => {
  const { SignIn } = UseLogin();
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email(),
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
    SignIn(data);
  };

  return (
    <Container>
      <Content>
        <img src={Burguer} alt="" />
        <h3>Sign In</h3>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
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

          <Button type="submit">Sign In</Button>

          <div>
            <Text>Don't have an account?</Text>
            <Button onClick={() => history.push("/register")}>Sign Up</Button>
          </div>
        </form>
      </Content>
    </Container>
  );
};
