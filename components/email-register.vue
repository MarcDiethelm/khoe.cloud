<template>
	<card class="email-register">
		<p class="label card-text">
			Sign up here for early access and further info.
		</p>
		<form @submit.prevent="onSubmit(email, email2)">
			<base-input v-model="email" type="email" placeholder="Enter email"></base-input>
			<base-button native-type="submit" type="primary" simple>Send</base-button>
			<p class="status-subscribed card-text">{{ resultMsg }}</p>
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
				})
				.catch(err => {
					console.log(err)
					this.resultMsg = 'Sorry. There was an error while saving your email.'
				})
		}
	}
}
</script>

<style lang="scss">
.label {
	margin-bottom: 1rem;
}
.status-subscribed {
	display: inline-block;
	padding-left: 2rem;
}
</style>
