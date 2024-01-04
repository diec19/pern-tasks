import { Input, Button, Card, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()

  const {signin,errors:alertas, } =useAuth()

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);

    if(user){
    navigate("/tasks")
  }
  });

  return (
    <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
      <li className="flex gap-x-1 items-center justify-center">
                 <img src="src/assets/logo.png" alt=""/>
                
       </li>
        {
          alertas && (
            alertas.map((err,i)=>(
              <p className="bg-red-500 opacity-80 text-white m-4 p-2 py-2 rounded-md text-center" key={i}>
                {err}
              </p>
            ))
          )
        }
        <h3 className="text-4x1 font-bold my-5 text-center">Login</h3>

        <form onSubmit={onSubmit}>
          <Label htmlForm="email">Email</Label>
          <Input
            type="email"
            placeholder="ejemplo@test.com"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <p className="text-red-500">email es requerido</p>}

          <Label htmlForm="password">Password</Label>
          <Input
            type="password"
            placeholder="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className="text-red-500">contraseña es requerida</p>
          )}

          <Button>Register</Button>

          <div className="flex justify-between my-4">
            <p className="mr-4">No tienes cuenta aun?</p>
            <Link to="/register" className="font-bold">
              Login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
