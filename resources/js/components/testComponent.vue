<template>
  <div>
    <template v-if="current_user">
      <h2>You are {{current_user.name}}. Sgamato.</h2>
    </template>
  </div>
</template>

<script>
  import * as hFunctions from '@/js/helpers/functions'

  export default {
    data(){
      return {
        current_user: null,
      }
    },

    created(){
      this.getInitValues();
    },

    methods: {
      ...hFunctions,

      getInitValues(){
        axios.get('/api/user').then(response => {
          var obj = response.data;
          if(obj && !obj.error){
            this.current_user = obj.current_user;
          }
          else{
            // Show error
            console.log(obj.error);
          }
        });
      },
    }
  }
</script>
