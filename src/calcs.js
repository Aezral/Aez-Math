import RT from "./calcs/razones-trigonometricas";
import CH from "./calcs/calculadora-horaria";
import PH from "./calcs/calculadora-ph";

const calcs = [
  {
    name: "Razones trigonométricas",
    path: "/calculadoras/razones-trigonometricas",
    component: RT,
    props: {
      icon:'shapes',
      description:
        "Calculadora de Razones Trigonométricas para obtener lados y ángulos faltantes de triángulos, y/o su área",
    },
  },
  {
    name: "Calculadora horaria",
    path: "/calculadoras/calculadora-horaria",
    component: CH,
    props: {
      icon: "clock",
      description:
        "Traductor de zonas horarias para transformar horas de distintos países y obtener equivalentes.",
    },
  },
  {
    name: "Calculadora de PH",
    path: "/calculadoras/calculadora-ph",
    component: PH,
    props: {
      icon:'atom',
      description:
        "Ingresa un dato, la página calculará los datos faltantes relativos al PH",
    },
  },
];

export default calcs;
