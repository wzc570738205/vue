<template>
	<div class="header">
		{{message}}
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				message:"this is headerhaha"
			}
		}
	}
</script>
<style type="text/css">
	.header{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: #000;
		color: #fff;
	}
</style>