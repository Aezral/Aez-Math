<template>
	<div class="main mx-auto" style="max-width: 600px; margin: 16vh 0px 16vh 0px">
		<MDBCard>
			<MDBCardBody>
				<MDBCardTitle><h5>Conversor de bases</h5></MDBCardTitle>
				<MDBCardText class="mb-5">Ingresa los datos</MDBCardText>
				<div class="mx-auto" style="max-width: 300px">
					<MDBRange
						class="mb-3"
						:label="`Base: ${dict[datos.base]}`"
						v-model="datos.base"
						:min="2"
						:max="16"
						:step="1"
					/>
					<MDBInput class="mb-8 mt-3" :label="`Número`" v-model="datos.number" />
				</div>

				<div
					class="mx-auto"
					style="max-width: 300px"
					:class="{ showing: isValid, hidding: !isValid }"
				>
					<MDBRange
						:label="`Base a convertir: ${dict[datos.resultbase]}`"
						v-model="datos.resultbase"
						:min="2"
						:max="16"
						:step="1"
					/>
					<p class="mb-5 mt-4">
						Convertido: <b>{{ result || "..." }}</b>
					</p>
				</div>
			</MDBCardBody>
		</MDBCard>
	</div>
</template>

<script setup>
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBInput,
	MDBRange,
} from "mdb-vue-ui-kit";

import { reactive, ref, watch } from "vue";

const dict = reactive({
	2: "Binaria",
	3: "Ternaria",
	4: "Cuaternaria",
	5: "Quinaria",
	6: "Senaria",
	7: "Eptal",
	8: "Octal",
	9: "Nonaria",
	10: "Decimal",
	11: "Undecimal",
	12: "Duodecimal",
	13: "Tridecimal",
	14: "Tetradecimal",
	15: "Pentadecimal",
	16: "Hexadecimal",
});

const datos = reactive({
	base: 9,
	number: null,
	resultbase: 9,
});

const result = ref(null);

const isValid = ref(false);

function isInGivenBase(str, bas) {
	if (bas > 16) return false;
	else if (bas <= 10) {
		for (let i = 0; i < str.length; i++)
			if (
				!(
					str[i].charCodeAt() >= "0".charCodeAt() &&
					str[i].charCodeAt() < "0".charCodeAt() + bas
				)
			)
				return false;
	} else {
		for (let i = 0; i < str.length; i++)
			if (
				!(
					(str[i].charCodeAt() >= "0".charCodeAt() &&
						str[i].charCodeAt() < "0".charCodeAt() + bas) ||
					(str[i].charCodeAt() >= "A".charCodeAt() &&
						str[i].charCodeAt() < "A".charCodeAt() + bas - 10)
				)
			)
				return false;
	}
	return true;
}

const convert = (from, to, number) => {
	if (!isInGivenBase(String(number), from)) {
		return null;
	}

	const result = parseInt(String(number), from).toString(to).toUpperCase();

	return result;
};

watch(datos, () => {
	if (datos.base && datos.number && datos.resultbase) {
		const convertido = convert(datos.base, datos.resultbase, datos.number);
		result.value = convertido;

		if (convertido) {
			isValid.value = true;
		} else {
			isValid.value = false;
		}
	} else {
		result.value = null;
		isValid.value = false;
	}
});
</script>

<style scoped>
@keyframes show {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
		visibility: visible;
	}
}
@keyframes hide {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		visibility: hidden;
	}
}

.showing {
	animation: 0.2s show;

	animation-fill-mode: forwards;
}
.hidding {
	animation: 0.2s hide;

	animation-fill-mode: forwards;
}
</style>
