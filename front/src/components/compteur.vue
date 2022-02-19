<template>
<div>
<h1>mon super compteur</h1>
<p @click="increment"> vous cliqué {{total}} fois. </p>    
 </div>

</template>

<script>


export default {
    name : 'compteur', 
    data(){
        return { 
            total:0
            } 
        },
        methods : {
            increment(){
            this.total += 1;
            }
            }

    }



</script>

<style scoped>

</style>
