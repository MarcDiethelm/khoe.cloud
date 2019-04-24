<template>
	<card class="container">
		<h1 class="mod-title">Attributions</h1>

		<h4>Logo</h4>
		<p>
			Protea flower vector graphic from<br />
			<a href="https://vecteezy.com" target="_blank">Free Vector Art by Vecteezy.com</a>
		</p>

		<h4>Development Framework</h4>
		<p>
			The Vue.js Framework, including Node,js, Express.js, Webpack, and many more<br />
			<a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
		</p>

		<h4>UI Framework</h4>
		<p>
			by Creative Tim<br />
			<a href="https://www.creative-tim.com/product/vue-black-dashboard" target="_blank">
				Vue Black Dashboard Free
			</a>
		</p>

		<h4>Deployment</h4>
		<p>
			The smallest PaaS implementation you've ever seen<br />
			<a href="http://dokku.viewdocs.io/dokku/" target="_blank">Dokku</a>
		</p>

		<h4>Favicon</h4>
		<p>
			Display font by Jeremy Nelson Design<br />
			<a href="https://www.jeremynelsondesign.com/free-geometric-font-apexmk2-display-typeface" target="_blank">
				Apex Mk2
			</a>
		</p>
	</card>
</template>
<script>
import Card from '~/components/dashboard/Cards/Card.vue'

export default {
	components: {
		Card
	}
}
</script>

<style lang="scss">
.container {
	margin-top: 2rem;
}
</style>
