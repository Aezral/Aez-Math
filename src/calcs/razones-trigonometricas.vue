<template>
  <div class="mx-auto row main align-middle mt-5" style="width: 80%">
    <div class="col mx-auto">
      <div class="card mx-auto mt-3 card2">
        <div class="card-body text-center">
          <MDBCardHeader>
            <h5><b>Datos</b></h5></MDBCardHeader
          >

          <div class="row mt-4">
            <div class="form-group mb-3 col-md-6">
              <MDBInput
                autocomplete="off"
                id="i-a"
                label="Lado a"
                v-model="Ia"
                :disabled="isValid && (Ia == null || Ia == '')"
                :class="[isValid && (Ia == null || Ia == '') ? 'active' : '']"
              />
            </div>
            <div class="form-group mb-3 col-md-6">
              <MDBInput
                autocomplete="off"
                id="i-A"
                label="Ángulo A"
                v-model="IA"
                :disabled="isValid && (IA == null || IA == '')"
                :class="[isValid && (IA == null || IA == '') ? 'active' : '']"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group mb-3 col-md-6">
              <MDBInput
                autocomplete="off"
                id="i-b"
                label="Lado b"
                v-model="Ib"
                :disabled="isValid && (Ib == null || Ib == '')"
                :class="[isValid && (Ib == null || Ib == '') ? 'active' : '']"
              />
            </div>
            <div class="form-group mb-3 col-md-6">
              <MDBInput
                autocomplete="off"
                id="i-B"
                label="Ángulo B"
                v-model="IB"
                :disabled="isValid && (IB == null || IB == '')"
                :class="[isValid && (IB == null || IB == '') ? 'active' : '']"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group mb-3 col-md-6">
              <MDBInput
                autocomplete="off"
                id="i-c"
                label="Lado c"
                v-model="Ic"
                :disabled="isValid && (Ic == null || Ic == '')"
                :class="[isValid && (Ic == null || Ic == '') ? 'active' : '']"
              />
            </div>
            <div class="form-group mb-3 col-md-6">
              <MDBInput
                autocomplete="off"
                id="i-C"
                label="Ángulo C"
                v-model="IC"
                :disabled="isValid && (IC == null || IC == '')"
                :class="[isValid && (IC == null || IC == '') ? 'active' : '']"
              />
            </div>
          </div>
          <div class="row">
            <MDBBtn
              class="ms-4"
              v-on:click="
                Ia = null;
                Ib = null;
                Ic = null;
                IA = null;
                IB = null;
                IC = null;
              "
              color="danger"
              floating
            >
              <MDBIcon icon="redo-alt"></MDBIcon>
            </MDBBtn>
            <MDBBtn class="ms-4" color="dark" floating @click="tirarinfo">
              <MDBIcon icon="info"></MDBIcon>
            </MDBBtn>
            <MDBBtn class="ms-4" color="info" floating @click="tirarayuda">
              <MDBIcon icon="question"></MDBIcon>
            </MDBBtn>
          </div>
        </div>
        <transition>
          <MDBCardFooter v-if="!isValid" class="text-muted">
            <div>Introduce los datos</div>
          </MDBCardFooter>
        </transition>
      </div>
    </div>
    <div class="col mx-auto">
      <div class="card mx-auto mt-3 card1">
        <div class="card-body text-center justify-content-cet">
          <MDBCardHeader>
            <h5><b>Triángulo</b></h5></MDBCardHeader
          >
          <div class="mt-3" style="color: darkgray"></div>
          <div class="container ofcanva" style="position: relative">
            <canvas
              class="mx-auto mt-5"
              id="canva"
              style="height: 90%; width: 100%"
            ></canvas>
            <Transition>
              <div v-if="isValid">
                <b
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    top: 8px;
                    left: 50%;
                    color: red;
                    transform: translate(-50%, -50%);
                  "
                  >C={{ pC }}</b
                >
                <b
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    bottom: 8px;
                    right: 16px;
                    color: red;
                  "
                >
                  A={{ pA }}
                </b>
                <b
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    bottom: 8px;
                    left: 16px;
                    color: red;
                  "
                >
                  B={{ pB }}
                </b>
                <!-- LADOS -->
                <p
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    top: 30%;
                    left: 56px;
                    transform: translate(-50%, -50%);
                  "
                >
                  a={{ pa }}
                </p>
                <p
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    top: 30%;
                    left: 80%;
                    transform: translate(-50%, -50%);
                  "
                >
                  b={{ pb }}
                </p>
                <p
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    bottom: 0px;
                    left: 50%;

                    transform: translate(-50%);
                    padding-bottom: 0px;
                    margin-bottom: 0px;
                  "
                >
                  c={{ pc }}
                </p>
              </div>
            </Transition>
            <Transition>
              <div v-if="!isValid">
                <b
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    top: 8px;
                    left: 50%;
                    color: red;
                    transform: translate(-50%, -50%);
                  "
                >
                  C
                </b>
                <b
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    bottom: 8px;
                    right: 16px;
                    color: red;
                  "
                >
                  A
                </b>
                <b
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    bottom: 8px;
                    left: 16px;
                    color: red;
                  "
                >
                  B
                </b>
                <!-- LADOS -->
                <p
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    top: 30%;
                    left: 56px;
                    transform: translate(-50%, -50%);
                  "
                >
                  a
                </p>
                <p
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    top: 30%;
                    right: 33px;
                    transform: translate(-50%, -50%);
                  "
                >
                  b
                </p>
                <p
                  class="top-right mt-4"
                  style="
                    position: absolute;
                    bottom: 0px;
                    left: 50%;

                    transform: translate(-50%);
                    padding-bottom: 0px;
                    margin-bottom: 0px;
                  "
                >
                  c
                </p>
              </div>
            </Transition>
          </div>
        </div>
        <MDBCardFooter class="text-muted">
          <div v-if="isValid">(La forma puede variar)</div>
          <div v-if="!isValid">Introduce un triángulo</div>
        </MDBCardFooter>
      </div>
    </div>
    <div class="col mx-auto" style="margin-bottom: 20%">
      <div class="card mx-auto mt-3 card2">
        <div class="card-body text-center">
          <MDBCardHeader>
            <h5><b>Procedimiento</b></h5></MDBCardHeader
          >
          <div class="mt-3" style="color: darkgray"></div>
          <Transition>
            <div v-if="isValid">
              <p><b>Fórmula: </b>{{ ley }}</p>
              <p><b>Tipo: </b>{{ tipo }}</p>
              <p><b>Subtipo: </b>{{ subtipo }}</p>
              <p><b>Area: </b>{{ area }}</p>

              <p>
                <a
                  v-if="isAmbiguous"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=W5sKfXyxM9I&ab_channel=GerardoAntonioAlvaradoEsquivel"
                  ><i class="far fa-question-circle"></i
                ></a>
                <b> Ambiguo: </b>{{ isAmbiguous ? "Si" : "No" }}
              </p>
            </div>
          </Transition>
        </div>
        <transition>
          <MDBCardFooter v-if="!isValid" class="text-muted">
            <div>Introduce un triángulo</div>
          </MDBCardFooter>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUpdated, onMounted } from "vue";
import {
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCardHeader,
  MDBCardFooter,
} from "mdb-vue-ui-kit";

import Swal from "sweetalert2";

const calcular = (a, b, c, A, B, C) => {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  A = Number(A);
  B = Number(B);
  C = Number(C);

  var respuesta = {};

  respuesta.a = null;
  respuesta.b = null;
  respuesta.c = null;
  respuesta.A = null;
  respuesta.B = null;
  respuesta.C = null;
  respuesta.tipo = "";
  respuesta.tipo2 = "";
  respuesta.isValid = false;
  respuesta.area = null;
  respuesta.ley = null;
  respuesta.ambiguo = false;

  if (a && b && c) {
    // Si hay 3 lados (LEY DEL COSENO)
    let lista = [a, b, c].sort((x, y) => x - y);

    if (lista[0] + lista[1] > lista[2]) {
      A = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 57.29;
      B = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * 57.29;
      C = Math.acos((a * a + b * b - c * c) / (2 * a * b)) * 57.29;
    }

    respuesta.a = a;
    respuesta.b = b;
    respuesta.c = c;
    respuesta.A = A;
    respuesta.B = B;
    respuesta.C = C;
    respuesta.isValid = true;
    respuesta.area = Math.sqrt(
      ((a + b + c) / 2) *
        ((a + b + c) / 2 - a) *
        ((a + b + c) / 2 - b) *
        ((a + b + c) / 2 - c)
    );
    respuesta.ley = "Ley de cosenos";
  } else if (((a && b) || (a && c) || (b && c)) && (A || B || C)) {
    // Si hay dos lados y un ángulo
    if ((a && b && C) || (a && c && B) || (b && c && A)) {
      // Si hay dos lados y un ángulo contenido entre ellos (LEY DEL COSENO)
      if (!a) {
        a = Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(A / 57.29));
      } else if (!b) {
        b = Math.sqrt(a * a + c * c - 2 * a * c * Math.cos(B / 57.29));
      } else if (!c) {
        c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C / 57.29));
      }
      if (C) {
        A = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 57.29;

        B = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * 57.29;
      } else if (B) {
        C = Math.acos((a * a + b * b - c * c) / (2 * a * b)) * 57.29;

        A = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 57.29;
      } else if (A) {
        B = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * 57.29;

        C = Math.acos((a * a + b * b - c * c) / (2 * a * b)) * 57.29;
      }

      respuesta.a = a;
      respuesta.b = b;
      respuesta.c = c;
      respuesta.A = A;
      respuesta.B = B;
      respuesta.C = C;
      respuesta.isValid = true;
      respuesta.area = Math.sqrt(
        ((a + b + c) / 2) *
          ((a + b + c) / 2 - a) *
          ((a + b + c) / 2 - b) *
          ((a + b + c) / 2 - c)
      );
      respuesta.ley = "Ley de cosenos";
    } else {
      // Ley de senos

      if (A) {
        if (a && b) {
          B = Math.asin(b * (Math.sin(A / 57.29) / a)) * 57.29;

          if (
            Math.round(B) ==
            Math.round(Math.asin(b * (Math.sin((180 - A) / 57.29) / a)) * 57.29)
          ) {
            respuesta.ambiguo = true;
          }

          C = 180 - A - B;
          c = (Math.sin(C / 57.29) * a) / Math.sin(A / 57.29);
        } else if (a && c) {
          C = Math.asin(c * (Math.sin(A / 57.29) / a)) * 57.29;

          if (
            Math.round(C) ==
            Math.round(Math.asin(c * (Math.sin((180 - A) / 57.29) / a)) * 57.29)
          ) {
            respuesta.ambiguo = true;
          }

          B = 180 - C - A;
          b = (Math.sin(B / 57.29) * a) / Math.sin(A / 57.29);
        }
      } else if (B) {
        if (b && a) {
          A = Math.asin(a * (Math.sin(B / 57.29) / b)) * 57.29;

          if (
            Math.round(A) ==
            Math.round(Math.asin(a * (Math.sin((180 - B) / 57.29) / b)) * 57.29)
          ) {
            respuesta.ambiguo = true;
          }

          C = 180 - A - B;
          c = (Math.sin(C / 57.29) * a) / Math.sin(A / 57.29);
        } else if (b && c) {
          C = Math.asin(c * (Math.sin(B / 57.29) / b)) * 57.29;

          if (
            Math.round(C) ==
            Math.round(Math.asin(c * (Math.sin((180 - B) / 57.29) / b)) * 57.29)
          ) {
            respuesta.ambiguo = true;
          }

          A = 180 - A - B;
          a = (Math.sin(A / 57.29) * b) / Math.sin(B / 57.29);
        }
      } else if (C) {
        if (c && a) {
          A = Math.asin(a * (Math.sin(C / 57.29) / c)) * 57.29;

          if (
            Math.round(A) ==
            Math.round(Math.asin(a * (Math.sin((180 - C) / 57.29) / c)) * 57.29)
          ) {
            respuesta.ambiguo = true;
          }

          B = 180 - A - C;
          b = (Math.sin(B / 57.29) * a) / Math.sin(A / 57.29);
        } else if (c && b) {
          B = Math.asin(b * (Math.sin(C / 57.29) / c)) * 57.29;

          if (
            Math.round(B) ==
            Math.round(Math.asin(b * (Math.sin((180 - C) / 57.29) / c)) * 57.29)
          ) {
            respuesta.ambiguo = true;
          }

          A = 180 - C - B;
          a = (Math.sin(A / 57.29) * b) / Math.sin(B / 57.29);
        }
      }

      respuesta.a = a;
      respuesta.b = b;
      respuesta.c = c;
      respuesta.A = A;
      respuesta.B = B;
      respuesta.C = C;
      respuesta.isValid = true;
      respuesta.area = Math.sqrt(
        ((a + b + c) / 2) *
          ((a + b + c) / 2 - a) *
          ((a + b + c) / 2 - b) *
          ((a + b + c) / 2 - c)
      );
      respuesta.ley = "Ley de senos";
    }
  } else if (((A && B) || (A && C) || (B && C)) && (a || b || c)) {
    // LEY DE SENOS
    if (A && B) {
      C = 180 - A - B;
    } else if (A && C) {
      B = 180 - A - C;
    } else if (B && C) {
      A = 180 - B - C;
    }
    if (a) {
      b = (Math.sin(B / 57.29) * a) / Math.sin(A / 57.29);
      c = (Math.sin(C / 57.29) * a) / Math.sin(A / 57.29);
    } else if (b) {
      a = (Math.sin(A / 57.29) * b) / Math.sin(B / 57.29);
      c = (Math.sin(C / 57.29) * b) / Math.sin(B / 57.29);
    } else if (c) {
      a = (Math.sin(A / 57.29) * c) / Math.sin(C / 57.29);
      b = (Math.sin(B / 57.29) * c) / Math.sin(C / 57.29);
    }

    respuesta.a = a;
    respuesta.b = b;
    respuesta.c = c;
    respuesta.A = A;
    respuesta.B = B;
    respuesta.C = C;
    respuesta.isValid = true;
    respuesta.area = Math.sqrt(
      ((a + b + c) / 2) *
        ((a + b + c) / 2 - a) *
        ((a + b + c) / 2 - b) *
        ((a + b + c) / 2 - c)
    );
    respuesta.ley = "Ley de senos";
  } else {
    respuesta.isValid = false;
  }

  respuesta.area = Number(respuesta.area).toFixed(2);

  respuesta.A = Number(respuesta.A);
  respuesta.B = Number(respuesta.B);
  respuesta.C = Number(respuesta.C);

  if (respuesta.A > 90 || respuesta.B > 90 || respuesta.C > 90) {
    respuesta.tipo = "Obtusángulo";
  } else if (
    Math.round(respuesta.A) == 90 ||
    Math.round(respuesta.B) == 90 ||
    Math.round(respuesta.C) == 90
  ) {
    respuesta.tipo = "Rectángulo";
    respuesta.ley = "Teorema de pitágoras";
  } else if (respuesta.A < 90 && respuesta.B < 90 && respuesta.C < 90) {
    respuesta.tipo = "Acutángulo";
  }
  if (respuesta.A == respuesta.B && respuesta.B == respuesta.C) {
    respuesta.tipo2 = "Equilátero";
  } else if (
    respuesta.A == respuesta.B ||
    respuesta.B == respuesta.C ||
    respuesta.C == respuesta.A
  ) {
    respuesta.tipo2 = "Isóceles";
  } else if (
    respuesta.A != respuesta.B &&
    respuesta.B != respuesta.C &&
    respuesta.C != respuesta.A
  ) {
    respuesta.tipo2 = "Escaleno";
  }

  if (!(A + B + C > 179 && A + B + C < 181 && A > 0 && B > 0 && C > 0)) {
    respuesta.a = null;
    respuesta.b = null;
    respuesta.c = null;
    respuesta.A = null;
    respuesta.B = null;
    respuesta.C = null;
    respuesta.isValid = false;
    respuesta.tipo = "";
    respuesta.tipo2 = "";
    respuesta.ley = "";
  }
  console.clear();
  console.log(respuesta);
  return respuesta;
};

const tri = {
  dibujar: function (A, B, C) {
    [A, B, C] = [Number(A), Number(B), Number(C)];

    var canvas = document.getElementById("canva");

    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var R1 = 100;
    var R2 = (Math.sin(B / 57.29) * R1) / Math.sin(A / 57.29);
    var R3 = (Math.sin(C / 57.29) * R2) / Math.sin(B / 57.29);

    if (R1 >= R2 && R1 >= R3) {
      R1 = 100;
      R2 = (Math.sin(B / 57.29) * R1) / Math.sin(A / 57.29);
      R3 = (Math.sin(C / 57.29) * R2) / Math.sin(B / 57.29);

      while (R1 / R2 > 2) {
        R2 += 1;
      }
      while (R2 / R3 > 2) {
        R3 += 1;
      }

      if (R1 > 100) {
        let aux = R1 / 100;

        R1 = 100;
        R2 /= aux;
        R3 /= aux;
      }
    } else if (R2 >= R3 && R2 >= R1) {
      R2 = 100;
      R1 = (Math.sin(A / 57.29) * R2) / Math.sin(B / 57.29);
      R3 = (Math.sin(C / 57.29) * R2) / Math.sin(B / 57.29);

      while (R2 / R3 > 2) {
        R3 += 1;
      }
      while (R3 / R1 > 2) {
        R1 += 1;
      }

      if (R2 > 100) {
        let aux = R2 / 100;

        R2 = 100;
        R1 /= aux;
        R3 /= aux;
      }
    } else if (R3 >= R1 && R3 >= R2) {
      R3 = 100;
      R2 = (Math.sin(B / 57.29) * R3) / Math.sin(C / 57.29);
      R1 = (Math.sin(A / 57.29) * R3) / Math.sin(C / 57.29);

      while (R3 / R1 > 2) {
        R1 += 1;
      }
      while (R1 / R2 > 2) {
        R2 += 1;
      }

      if (R3 > 100) {
        let aux = R3 / 100;

        R3 = 100;
        R1 /= aux;
        R2 /= aux;
      }
    }

    [R1, R2, R3] = [Math.ceil(R1), Math.ceil(R2), Math.ceil(R3)];

    [R1, R2] = [R2, R1];

    var Ax = 0,
      Ay = 0;
    var Bx = R3,
      By = 0;
    var Cx = (R2 * R1 + R3 * R3 - R1 * R1) / (2 * R3);
    var Cy = Math.sqrt(R2 * R2 - Cx * Cx);

    var Ox = canvas.width / 2 - Bx / 2;
    var Oy = canvas.height / 2 + Cy / 2;

    ctx.beginPath();

    ctx.moveTo(Ox + Ax, Oy - Ay - 10);

    ctx.lineTo(Ox + Bx, Oy - By - 10);
    ctx.lineTo(Ox + Cx, Oy - Cy - 10);
    ctx.closePath();
    ctx.fillStyle = "lightblue";
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.fill();
  },
  limpiar: function () {
    var [A, B, C] = [60, 60, 60];

    [A, B, C] = [Number(A), Number(B), Number(C)];

    var canvas = document.getElementById("canva");

    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var R1 = 100;
    var R2 = (Math.sin(B / 57.29) * R1) / Math.sin(A / 57.29);
    var R3 = (Math.sin(C / 57.29) * R2) / Math.sin(B / 57.29);

    if (R1 >= R2 && R1 >= R3) {
      R1 = 100;
      R2 = (Math.sin(B / 57.29) * R1) / Math.sin(A / 57.29);
      R3 = (Math.sin(C / 57.29) * R2) / Math.sin(B / 57.29);

      while (R1 / R2 > 2) {
        R2 += 1;
      }
      while (R2 / R3 > 2) {
        R3 += 1;
      }

      if (R1 > 100) {
        let aux = R1 / 100;

        R1 = 100;
        R2 /= aux;
        R3 /= aux;
      }
    } else if (R2 >= R3 && R2 >= R1) {
      R2 = 100;
      R1 = (Math.sin(A / 57.29) * R2) / Math.sin(B / 57.29);
      R3 = (Math.sin(C / 57.29) * R2) / Math.sin(B / 57.29);

      while (R2 / R3 > 2) {
        R3 += 1;
      }
      while (R3 / R1 > 2) {
        R1 += 1;
      }

      if (R2 > 100) {
        let aux = R2 / 100;

        R2 = 100;
        R1 /= aux;
        R3 /= aux;
      }
    } else if (R3 >= R1 && R3 >= R2) {
      R3 = 100;
      R2 = (Math.sin(B / 57.29) * R3) / Math.sin(C / 57.29);
      R1 = (Math.sin(A / 57.29) * R3) / Math.sin(C / 57.29);

      while (R3 / R1 > 2) {
        R1 += 1;
      }
      while (R1 / R2 > 2) {
        R2 += 1;
      }

      if (R3 > 100) {
        let aux = R3 / 100;

        R3 = 100;
        R1 /= aux;
        R2 /= aux;
      }
    }

    [R1, R2, R3] = [Math.ceil(R1), Math.ceil(R2), Math.ceil(R3)];

    [R1, R2] = [R2, R1];

    var Ax = 0,
      Ay = 0;
    var Bx = R3,
      By = 0;
    var Cx = (R2 * R1 + R3 * R3 - R1 * R1) / (2 * R3);
    var Cy = Math.sqrt(R2 * R2 - Cx * Cx);

    var Ox = canvas.width / 2 - Bx / 2;
    var Oy = canvas.height / 2 + Cy / 2;

    ctx.beginPath();

    ctx.moveTo(Ox + Ax, Oy - Ay - 10);

    ctx.lineTo(Ox + Bx, Oy - By - 10);
    ctx.lineTo(Ox + Cx, Oy - Cy - 10);
    ctx.closePath();
    ctx.fillStyle = "lightblue";
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.fill();
  },
};

function tirarinfo() {
  Swal.fire({
    title: "Gracias por visitarnos.",
    text: "RT nació como un proyecto con fines académicos, sin embargo, en esta versión mejorada sintetizamos todas las funciones en una sola interfaz, además de agregar más funciones, haciendo que ahora no debas elegir entre los tipos de triángulos, además de dibujarlos dinámicamente, ¡Agradecemos mucho que nos elijas para realizar tus cálculos! — Luis",
    icon: "info",
    confirmButtonText: "Cerrar",
  });
}

function tirarayuda() {
  Swal.fire({
    title: "¿Cómo usar?",
    html:
      "<p>Coloca los datos mínimos necesarios para formar un triángulo, la página automáticamente dibujará el triángulo y llenará los campos faltantes, para reiniciar los campos solamente debes presionar el botón rojo.<p> " +
      "<p>¿Quieres conocer los temas? ¡Visita estos videos!<p>" +
      '<br><a target="_blank" href="https://www.youtube.com/watch?v=e2_WDo5yK_Q&ab_channel=Matem%C3%A1ticasprofeAlex">Tutorial de ley de senos <i class="fas fa-external-link-alt"></i></a> ' +
      '<br><br><a target="_blank" href="https://www.youtube.com/watch?v=65RP6V0hsy4&ab_channel=Matem%C3%A1ticasprofeAlex">Tutorial de ley de cosenos <i class="fas fa-external-link-alt"></i></a> ' +
      '<br><br><a  target="_blank" href="https://www.youtube.com/watch?v=XfVWlO3sRw0&ab_channel=Matem%C3%A1ticasprofeAlex">Tutorial de teorema de pitágoras <i class="fas fa-external-link-alt"></i></a>' +
      '<br><br><a  target="_blank" href="https://www.youtube.com/watch?v=ANiKd4LlGbQ&ab_channel=Matem%C3%A1ticasprofeAlex">Tutorial de Fórmula de Herón <i class="fas fa-external-link-alt"></i></a>',

    confirmButtonText: "Cerrar",
  });
}

var Ia = ref(null);
var Ib = ref(null);
var Ic = ref(null);
var IA = ref(null);
var IB = ref(null);
var IC = ref(null);
var pa = ref(null);
var pb = ref(null);
var pc = ref(null);
var pA = ref(null);
var pB = ref(null);
var pC = ref(null);
var area = ref(null);
var tipo = ref(null);
var subtipo = ref(null);
var ley = ref(null);
var isValid = ref(false);
var isAmbiguous = ref(false);

onMounted(() => {
  tri.limpiar();
});

onUpdated(() => {
  var calculado = calcular(
    Ia.value,
    Ib.value,
    Ic.value,
    IA.value,
    IB.value,
    IC.value
  );
  if (calculado.isValid) {
    isValid.value = calculado.isValid;
    tipo.value = calculado.tipo;
    subtipo.value = calculado.tipo2;
    area.value = calculado.area;
    ley.value = calculado.ley;

    tri.dibujar(calculado.A, calculado.B, calculado.C);

    pa.value = Number(calculado.a).toFixed(2);
    pb.value = Number(calculado.b).toFixed(2);
    pc.value = Number(calculado.c).toFixed(2);

    if (Number(calculado.A).toFixed(2) == 59.99) calculado.A = 60;
    if (Number(calculado.B).toFixed(2) == 59.99) calculado.B = 60;
    if (Number(calculado.C).toFixed(2) == 59.99) calculado.C = 60;

    if (Number(calculado.A).toFixed(2) == 0.0) calculado.A = 0.01;
    if (Number(calculado.B).toFixed(2) == 0.0) calculado.B = 0.01;
    if (Number(calculado.C).toFixed(2) == 0.0) calculado.C = 0.01;

    pA.value = Number(calculado.A).toFixed(2) + "°";
    pB.value = Number(calculado.B).toFixed(2) + "°";
    pC.value = Number(calculado.C).toFixed(2) + "°";

    if (Ia.value == null || Ia.value == "")
      document.getElementById("i-a").value = pa.value;
    if (Ib.value == null || Ib.value == "")
      document.getElementById("i-b").value = pb.value;
    if (Ic.value == null || Ic.value == "")
      document.getElementById("i-c").value = pc.value;
    if (IA.value == null || IA.value == "")
      document.getElementById("i-A").value = pA.value;
    if (IB.value == null || IB.value == "")
      document.getElementById("i-B").value = pB.value;
    if (IC.value == null || IC.value == "")
      document.getElementById("i-C").value = pC.value;

    isAmbiguous.value = calculado.ambiguo;
  } else {
    tipo.value = null;
    subtipo.value = null;
    area.value = null;
    ley.value = null;
    isValid.value = false;
    tri.limpiar();

    pa.value = calculado.a;
    pb.value = null;
    pc.value = null;
    pA.value = null;
    pB.value = null;
    pC.value = null;

    isAmbiguous.value = false;
  }
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.container .ofcanva {
  height: 70%;
  width: 100%;
}

.col {
  min-height: 25rem;
  min-width: 20rem;
  max-width: 70%;
}

.card {
  min-height: 25rem;
  min-width: 18rem;
  max-width: 63%;
  
}

.row.main {
  margin-top: 9rem !important;
}

.hidden {
  display: none !important;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(170, 170, 170);
  opacity: 1;
  /* Firefox */
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(170, 170, 170);
}

.borrar {
  color: white;
  border-radius: 100%;
  border: 1px solid rgb(146, 146, 146);
}

.borrar:active {
  color: white;
  background-color: rgb(85, 85, 85);
  border: 1px solid rgb(85, 85, 85);
}

.ayuda {
  color: white;
  border-radius: 100%;
  border: 1px solid rgb(0, 204, 255);
}

.ayuda:active {
  color: white;
  background-color: rgb(0, 204, 255);
  border: 1px solid rgb(0, 204, 255);
}

@keyframes appear {
  0% {
    opacity: -1;
    transform: translateY(-70px);
  }

  100% {
    opacity: 1;
  }
}

@keyframes appear2 {
  0% {
    opacity: -1;
    transform: translateY(70px);
  }

  100% {
    opacity: 1;
  }
}

.titulo {
  color: rgb(255, 255, 255);
  position: absolute;
  left: 0;
  right: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
}

.top-right {
  display: inline-block;
  background-color: white;
}
</style>
