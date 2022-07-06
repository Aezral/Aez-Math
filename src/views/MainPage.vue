npm
<template>
  <div>
    <div class="header">
      <div>
        <h1>AezMath</h1>
      </div>
    </div>
    <div id="main" class="main">
      <div class="mb-9"></div>
      <MDBRow style="max-width: 80%" class="mx-auto">
        <MDBCol :class="{ showing1: mainshowing, hidding: !mainshowing }" col="lg-6">
          <h1>¿Porqué AezMath?</h1>
          <p class="mt-4 mb-7">
            AezMath constantemente busca agregar nuevas calculadoras que puedan
            ser útiles para cualquier estudiante o persona en su vida cotidiana,
            sin embargo, aunque intentamos asegurar exactitud en todos los
            cálculos, se recomienda usar herramientas más completas para el
            campo profesional.
          </p>
        </MDBCol>
        <MDBCol :class="{ showing2: mainshowing, hidding: !mainshowing }" col="lg-6">
          <img src="../../assets/logo.png" alt="" />
        </MDBCol>
      </MDBRow>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { MDBCol, MDBRow } from "mdb-vue-ui-kit";

const mainshowing = ref(false);

var callback = function (entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      if (mainshowing.value == false) {
        mainshowing.value = true;
      }
    }
  }
};
console.log(mainshowing.value);
const mainobserver = ref(
  new IntersectionObserver(callback, {
    threshold: 0.6,
  })
);

onMounted(() => {
  mainobserver.value.observe(document.getElementById("main"));
  // setTimeout(() => {
  //   ready.value = true;
  // }, 601);
});
</script>

<style scoped>
.header {
  font-size: larger;
  padding-top: 15rem;
  padding-bottom: 15rem;
  background: linear-gradient(
    -45deg,
    #572bcf,
    #00eaa0,
    #572bcf,
    #00eaa0,
    #572bcf,
    #00eaa0,
    #572bcf
  );
  background-size: 400% 400%;
  color: white;
  animation: gradient 15s ease infinite;
}

.main {
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: rgb(228, 228, 228);
}

.main p {
  font-size: larger;
  padding-left: 10%;
  padding-right: 10%;
}

.main img {
  max-width: 60%;
}

.hidding{
  opacity:0;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideInFromRight {
  0% {
    transform: translateX(10%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.showing1 {
  animation: 0.6s ease-out 0s 1 slideInFromLeft;
}

.showing2 {
  animation: 0.6s ease-out 0s 1 slideInFromRight;
}
</style>
