import RT from "./calcs/razones-trigonometricas";
import CH from "./calcs/calculadora-horaria";
import CB from "./calcs/conversor-de-bases";

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
    name: "Conversor de bases",
    path: "/calculadoras/conversor-de-bases",
    component: CB,
    props: {
      icon:'atom',
      description:
        "Conversor de bases númericas.",
    },
  },

];

export default calcs;
