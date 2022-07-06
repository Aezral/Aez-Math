<template>
  <MDBNavbar expand="lg" dark bg="dark" container>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav center class="mb-2 mb-lg-0">
        <MDBNavbarItem
          v-for="link of router
            .getRoutes()
            .filter((x) => !x.path.split('/')[2] && x.name)"
          :key="link"
          :to="link.path"
          :active="useRoute().name == link.name"
        >
          {{ link.name }}
        </MDBNavbarItem>
          <MDBNavbarItem
            active
            :to="useRoute().path"
            v-if="
              !router
                .getRoutes()
                .filter((x) => !x.path.split('/')[2])
                .map((x) => x.name)
                .includes(useRoute().name)
            "
          >
            {{ useRoute().name }}
          </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script setup>
import { useRoute } from "vue-router";
import router from "../router";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
const collapse1 = ref(false);
</script>

