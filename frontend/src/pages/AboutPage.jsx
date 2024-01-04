import { Card } from "../components/ui";

const AboutPage = () => {
  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">Sobre esta aplicacion Web</h1>
        <p>
          Esta es la version 1 de un sistema, que pretende abarcar, varios modulos,
          para ser usado en una empresa, tales como los modulos de proveedores, facturacion, control de stock,
          control de equipamiento, control del personal, seguimiento de ventas. 
        </p>
      </Card>
    </div>
  )
}

export default AboutPage