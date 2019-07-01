<template>
	<card class="container">
		<h1 class="mod-title">Privacy</h1>
		<h2>Analytics</h2>
		<p>
			We use a self-hosted web analytics solution called Countly Community Edition. We may use browser storage,
			clear images, device information and IP addresses to better understand user interaction with our products,
			services, and communications.
		</p>
		<p class="privacy-summary">
			<strong>No analytics data is shared with any 3rd party.</strong> No ad networks are tracking you here!
		</p>
		<p>
			Since no analytics data is made available to any 3rd parties and since our website contains no ads,
			<strong>we're asking you disable any adblockers</strong> on this website, so that we may get a more complete
			picture of who is visiting our website and how, and using it in which way and to identify any problems a
			visitor may encounter through our error tracking. Thank you.
		</p>
		<h2>Email</h2>
		<p>
			We offer you to subscribe with your email address to communications and updates from Khoe Cloud. Email
			addresses are managed and stored (for now) by the communication service, Mailchimp.
		</p>
		<p class="privacy-summary">
			<strong>Email addresses are stored by a third party (for now).</strong>
		</p>
		<h2>Payment processing</h2>
		<p>
			Our website and related pages on other platforms like Github may allow you to make purchases (such as
			services or hardware) or make donations.
		</p>
		<p class="privacy-summary">
			<strong>These transactions are processed by third parties.</strong>
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
.privacy-summary {
	padding-top: 0.8em;
	padding-bottom: 0.8em;
}
</style>
