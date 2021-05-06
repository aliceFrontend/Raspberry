<template>
    <div class="error">{{message}}</div>
</template>

<script>

export default({
    name: 'AppError',
    props:{
        message:{
            type: String,
            required: false,
            default: 'Something went wrong'
        }
    }
})
</script>
