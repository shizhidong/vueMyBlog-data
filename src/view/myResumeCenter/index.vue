<template>
    <div>
        简历中心
    </div>
</template>
<script>
    export default{
        data(){
            return{
                id:2
            }
        },
        mounted() {
            this.$store.state.navNumber=this.id
        },
    }

</script>
