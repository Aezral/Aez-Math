<template>
  <div class="main mx-auto" style="max-width: 65%">
    <MDBRow>
      <MDBCol col="md-6 mx-auto">
        <MDBCard class="tarjeta mb-5">
          <MDBCardBody>
            <MDBCardHeader class="mb-4">
              <h5 class="d-inline"><b>Datos</b></h5>

              <MDBBtn
                v-on:click="reiniciar()"
                floating
                class="d-inline ms-3"
                color="danger"
                size="sm"
                ><i class="fas fa-redo-alt"></i
              ></MDBBtn>
            </MDBCardHeader>

            <MDBRange
              :label="`Zona horaria `"
              v-model="zona1.zona"
              :min="-12"
              :max="12"
            />
            <MDBRange :label="`Hora`" v-model="zona1.hora" :min="0" :max="23" />
            <MDBRange
              :label="`Minutos`"
              v-model="zona1.minuto"
              :min="0"
              :max="59"
            />
            <MDBCardText class="mt-3">
              <b>Hora seleccionada:</b>
              <h5 class="mt-1">
                {{
                  `${
                    zona1.zona == 0
                      ? "UTC"
                      : zona1.zona < 0
                      ? "UTC" + zona1.zona
                      : "UTC+" + zona1.zona
                  } ${
                    zona1.hora < 12
                      ? String(zona1.hora).padStart(2, "0")
                      : String(zona1.hora - 12).padStart(2, "0")
                  }:${String(zona1.minuto).padStart(2, "0")} ${(zona1.hora < 12) ? 'AM' : 'PM'}`
                }}
              </h5>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol col="md-6 mx-auto">
        <MDBCard class="tarjeta mb-5">
          <MDBCardBody>
            <MDBCardHeader class="mb-4">
              <h5>
                <b>Conversión</b>
              </h5>
            </MDBCardHeader>
            <MDBRange
              :label="`Zona horaria a convertir`"
              v-model="zona2.zona"
              :min="-12"
              :max="12"
            />
            <MDBCardText class="mt-3">
              <b>Hora convertida:</b>
              <h5 class="mt-1">
                {{
                  `${
                    zona2.zona == 0
                      ? "UTC"
                      : zona2.zona < 0
                      ? "UTC" + zona2.zona
                      : "UTC+" + zona2.zona
                  } ${
                    result.hora < 12
                      ? String(result.hora).padStart(2, "0")
                      : String(result.hora - 12).padStart(2, "0")
                  }:${String(result.minuto).padStart(2, "0")} ${(result.hora < 12) ? 'AM' : 'PM'}`
                }}
              </h5>
              <div style="height: 30px">
                <transition>
                  <p v-if="result.adelanto != 0" class="text-muted">
                    {{
                      result.adelanto < 0
                        ? `+${Math.abs(result.adelanto)} días de retraso`
                        : `+${result.adelanto} días de adelanto`
                    }}
                  </p>
                </transition>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow> </MDBRow>
  </div>
</template>

<script setup>
import { reactive, onMounted, watch } from "vue";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBRange,
  MDBCardText,
} from "mdb-vue-ui-kit";

const zona1 = reactive({
  zona: 0,
  hora: 0,
  minuto: 0,
});

const zona2 = reactive({
  zona: 0,
});

const result = reactive({
  adelanto: 0,
  hora: 0,
  minuto: 0,
});

function reiniciar() {
  const ahora = new Date();
  const UTC = ahora.getTimezoneOffset() / 60;
  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();

  zona1.zona = UTC * -1;
  zona1.hora = hora;
  zona1.minuto = minutos;
  zona2.zona = 0;
}

onMounted(() => {
  reiniciar();
});

watch([zona1, zona2], () => {
  let fixed = zona1.hora - zona1.zona + zona2.zona;
  let adelanto = 0;
  while (fixed >= 24) {
    fixed -= 24;
    adelanto++;
  }

  while (fixed < 0) {
    fixed += 24;
    adelanto--;
  }

  result.adelanto = adelanto;
  result.hora = fixed;
  result.minuto = zona1.minuto;
});
</script>

<style scoped>
.main {
  margin-top: 9rem;
  margin-bottom: 30rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
