<template>
	<card class="email-register">
		<p class="label card-text">
			Sign up here for early access and further info. <a href="/privacy" class="small link-privacy">→ privacy</a>
		</p>
		<form @submit.prevent="onSubmit(email, email2)">
			<base-input v-model="email" type="email" placeholder="Enter email"></base-input>
			<base-button native-type="submit" type="primary" simple>Send</base-button>
			<p class="resultMsg card-text">{{ resultMsg }}</p>
			<!-- anti-spam -->
			<div style="position: absolute; left: -5000px;" aria-hidden="true">
				<input type="text" name="email2" tabindex="-1" value="spam" />
			</div>
		</form>
	</card>
</template>

<script>
import Card from '~/components/dashboard/Cards/Card.vue'
import BaseInput from '~/components/dashboard/Inputs/BaseInput.vue'
import BaseButton from '~/components/dashboard/BaseButton.vue'

export default {
	components: {
		Card,
		BaseInput,
		BaseButton
	},
	data() {
		return {
			email: '',
			email2: '',
			resultMsg: ''
		}
	},
	methods: {
		onSubmit(email) {
			this.resultMsg = ''
			if (!email.trim()) return
			this.post()
		},
		post: function() {
			this.$axios
				.post('/api/news/signup', {
					email: this.email,
					isSpam: !!this.email2.length
				})
				.then(res => {
					this.resultMsg = "Great! You'll hear from us soon."
					this.$track('add_event', {
						key: 'email-signup-success',
						segmentation: { email: this.email }
					})
				})
				.catch(err => {
					this.resultMsg = 'Sorry. There was an error while saving your email. ' + err.response.data.detail
					// bug: with `log_error` data is not transmitted, error is not shown on Countly server
					this.$track('add_event', {
						key: 'email-signup-error',
						segmentation: { email: this.email, detail: err.response.data.detail }
					})
				})
		}
	}
}
</script>

<style lang="scss">
.label {
	margin-bottom: 1rem;
}
.link-privacy {
	display: inline-block;
	margin-left: 0.8em;
}
.btn {
	vertical-align: top;
}
.resultMsg {
	display: inline-block;
	padding-left: 2rem;
	max-width: 72%;
}
</style>
