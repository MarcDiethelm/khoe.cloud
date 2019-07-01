<template>
	<div class="btn-container">
		<a class="kofi-button" href="https://ko-fi.com/K3K8UEY1" target="_blank">
			<span class="kofitext">
				<img src="/img/cuplogo.svg" class="kofiimg" />
				Please support us on Ko-fi
			</span>
		</a>
	</div>
</template>

<style lang="scss">
.btn-container {
	display: inline-block !important;
	white-space: nowrap;
	min-width: 160px;
	align-self: center;
}
a.kofi-button {
	box-shadow: 1px 2px 1px #0003;
	line-height: 32px !important;
	min-width: 150px;
	display: inline-block !important;
	background-color: #7a2c7a;
	padding: 2px 11px !important;
	text-align: center !important;
	border-radius: 3px;
	color: #fff;
	cursor: pointer;
	overflow-wrap: break-word;
	vertical-align: middle;
	border: 0 none #fff !important;
	font-family: 'Quicksand', Helvetica, Century Gothic, sans-serif !important;
	text-decoration: none;
	text-shadow: none;
	font-weight: 700 !important;
	font-size: 14px !important;
}
span.kofitext {
	color: #fffc;
	letter-spacing: -0.15px !important;
	text-wrap: none;
	vertical-align: middle;
	line-height: 32px !important;
	padding: 0;
	text-align: center;
	text-decoration: none !important;
	text-shadow: 0 1px 1px #2222224d;
}
.kofitext img.kofiimg {
	height: 13px !important;
	width: 20px !important;
	display: initial;
	vertical-align: text-top;
	-webkit-filter: drop-shadow(0 1px 1px rgba(34, 34, 34, 0.3));
}
</style>
