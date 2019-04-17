<template>
	<div class="logo">
		<img src="/img/protea.png" alt="protea flower" />
		<div class="logo-text">
			<h1 class="logo-title">
				Khoe&nbsp;Cloud
			</h1>
			<!-- <small class="text-muted">It's your data. Take it back.</small> -->
		</div>
	</div>
</template>

<style lang="scss">
.logo {
	display: flex;
	width: 100%;
	justify-content: center;
	flex-wrap: wrap;
	margin: 5rem auto 10rem auto;
	img {
		height: 100px;
		margin-right: 38px;
	}
}
.logo-text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100px;
	text-align: center;
}
.logo-title {
	font-family: Poppins;
	font-weight: 200;
	text-transform: uppercase;
	margin-bottom: 8px;
}
.footer {
	padding-left: 24px;
}
</style>
