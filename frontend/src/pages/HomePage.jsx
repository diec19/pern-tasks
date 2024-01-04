import { Card } from "../components/ui";
import { useAuth } from "../context/AuthContext";
const HomePage = () => {
  const data = useAuth();
  console.log(data);
  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">Bienvenido a TaskSystem</h1>
        <p>
          Es un sistema desarrollado desde cero, utilizando las tecnologia de, Node-express, React, Jwt, cookie, postgress y su deploy desde railwid
        </p>
      </Card>
    </div>
  );
};

export default HomePage;
