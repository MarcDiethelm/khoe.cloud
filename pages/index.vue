<template>
	<div>
		<div class="mission text-muted">
			<p>Make digital privacy trivial</p>
			<p>Your data always accessible to you</p>
			<p>Make self-hosting simple and secure</p>
			<p>Affordable, capable hardware</p>
			<p>Focus on simplicity and aesthetics</p>
		</div>
		<h4 class="tagline">It's your data. Take it back.</h4>
		<div class="container">
			<logo />
		</div>
		<div class="container">
			<email-register />
		</div>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import EmailRegister from '~/components/email-register.vue'

export default {
	components: {
		Logo,
		EmailRegister
	}
}
</script>

<style lang="scss">
.container {
	display: flex;
	flex-flow: row;
	max-width: 600px;
}
.mission {
	width: 100%;
	text-align: center;
	margin-top: 4rem;
	margin-bottom: 20px;
	p {
		color: inherit;
	}
}
.tagline {
	text-align: center;
}
.footer {
	padding-left: 24px;
}
</style>
