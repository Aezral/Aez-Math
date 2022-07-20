<template>
	<div>
		<div class="header">
			<div>
				<h1>Calculadoras</h1>
			</div>
		</div>
		<div class="main">
			<div class="mb-5"></div>
			<MDBContainer sm>
				<MDBRow
					v-for="line of Math.ceil(calcs.length / 3)"
					:key="line"
					class="mx-auto"
				>
					<MDBCol
						class="col-xxl-4 mb-4"
						v-for="card of calcs.slice(3 * (line - 1), line * 3)"
						:key="card"
					>
						<MDBCard>
							<MDBCardHeader class="pb-3 pt-4">
								<h5 class="d-inline-block me-2">{{ card.name }}</h5>
								<i
									class="fas d-inline-block"
									:class="`fa-${card.props.default.icon}`"
								></i
							></MDBCardHeader>
							<MDBCardBody>
								<MDBCardText>
									{{ card.props.default.description }}
								</MDBCardText>
								<router-link :to="card.path">
									<MDBBtn floating color="dark"
										><i class="fas fa-external-link-alt"></i></MDBBtn
								></router-link>
							</MDBCardBody> </MDBCard
					></MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	</div>
</template>

<script setup>
//import { ref } from "vue";
import { useRouter } from "vue-router";
import {
	MDBCardHeader,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardText,
	MDBBtn,
	MDBContainer,
	MDBRow,
} from "mdb-vue-ui-kit";

const calcs = useRouter()
	.getRoutes()
	.filter((x) => x.path.split("/")[1] == "calculadoras" && x.path.split("/")[2]);
</script>

<style scoped>
.header {
	font-size: larger;
	padding-top: 8rem;
	padding-bottom: 8rem;
	background: linear-gradient(
		-45deg,
		#df743f,
		#ea0094,
		#df743f,
		#ea0094,
		#df743f,
		#ea0094,
		#df743f
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
</style>
