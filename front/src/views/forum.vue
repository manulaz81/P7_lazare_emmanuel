<template>


  <div id="forum">
     <navigation/>
      <logout/>
    <forumgroup mess="bisous les enfants"/>
   <commentaire/>
    
  </div>
</template>

<script>

import navigation from '@/components/navigation.vue'
import forumgroup from '@/components/forumgroup.vue'
import commentaire from '@/components/commentaire.vue'
import logout from '@/components/logout.vue'



export default {
  name: '#forum',
  components: {
    forumgroup,commentaire,navigation,logout
  }
}
</script>

<style lang="scss">
#photo_logo {
width : 110px;

  }
</style>