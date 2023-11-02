<template>
	<div class="burger z-20" @click="toggleNavigation" :class="{ active: props.modelValue }">
		<span class="bars one"></span>
		<span class="bars two"></span>
		<span class="bars three"></span>
		<span class="bars four"></span>
	</div>
</template>

<script setup>
//imports
import { defineProps, defineEmits } from 'vue'

//props
const props = defineProps({
	modelValue: {
		type: Boolean,
	},
})

//emits
const emit = defineEmits(['update:modelValue'])

//show navigation function
const toggleNavigation = () => {
	if (props.modelValue) {
		emit('update:modelValue', false)
	} else {
		emit('update:modelValue', true)
	}
}
</script>

<style lang="scss" scoped>
.burger {
	cursor: pointer;
	position: relative;
	width: 40px;
	height: 40px;
	transform: translateX(150%);
	opacity: 0;
	animation: showBurger 2s forwards;

	.bars {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		background-color: #fff;
		transform: translateY(-50%);
		transition: transform 0.5s, opacity 0.5s;
	}

	.one {
		top: 3px;
		transform: translateY(50%);
	}

	.two,
	.three {
		top: 50%;
	}

	.four {
		bottom: 3px;
	}
}

.active {
	z-index: 50;
	.one {
		top: 50%;
		transform: rotate(135deg);
	}

	.four {
		top: 50%;
		transform: rotate(-135deg);
	}

	.two,
	.three {
		opacity: 0;
	}

	.two {
		transform: translateX(-150%);
	}
	.three {
		transform: translateX(-150%);
	}
}

//keyframes
@keyframes showBurger {
	from {
		transform: translateX(150%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
</style>
