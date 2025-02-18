<template>
  <div>
    <h2>Whatsapp</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Chat da gestire</th>
            <th>
              <span class="wa"></span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="waacc in waaccs">
            <tr>
              <td>{{$niceNumber(waacc.chat_count)}}</td>
              <td>{{$niceField(waacc.whatsapp_phone_number)}}</td>
              <td></td>
            </tr>
          </template>
        </tbody>
      </table>
      <p class="no-rows" v-if="waaccs.length==0">Non è stato trovato alcun account whatsapp, modifica i parametri di ricerca.</p>
      <div class="pagination" v-if="page_number>1">
        <span class="prev" @click="prevPage"></span>
        <span v-for="page in page_range" class="item" :class="page==current_page ? 'active' : ''" @click="selectPage(page)">{{page}}</span>
        <span class="next" @click="nextPage"></span>
        <span class="total-page">di {{page_number}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import * as hFunctions from '@/js/helpers/functions'

  export default {
    props: {
      partner: Object,
    },

    data(){
      return {
        waaccs: [],

        limit: 8,
        offset: 0,
        current_page: 1,
        page_number: 0,
        page_range: [],
        page_shown: 7,
      }
    },

    created(){
      this.getInitValues();
    },

    methods: {
      ...hFunctions,

      prevPage(){
        if(this.current_page>1){
          this.current_page--;
          this.offset--;
          this.getInitValues();
        }
      },

      selectPage(page_index){
        if(this.current_page!=page_index){
          this.current_page=page_index;
          this.offset=page_index-1;
          this.getInitValues();
        }
      },

      nextPage(){
        if(this.current_page<this.page_number){
          this.current_page++;
          this.offset++;
          this.getInitValues();
        }
      },

      calculatePageRange(){
        var temp_page_range = [];
        var start = 0;
        var end = this.page_shown;
        if(this.page_number>this.page_shown){
          if(this.current_page<4){
            start = 0;
            end = this.page_shown;
          }
          else if(this.current_page>(this.page_number-4)){
            start = this.page_number-this.page_shown;
            end = this.page_number;
          }
          else{
            start = this.current_page-Math.ceil(this.page_shown/2);
            end = this.current_page+Math.floor(this.page_shown/2);
          }
        }
        else{
          end = this.page_number;
        }
        for(var i=start;i<end;i++){
          temp_page_range.push(parseInt(i+1));
        }
        this.page_range = temp_page_range;
      },

      calculateOffset(){
        return this.limit*this.offset;
      },

      getInitValues(type=null){
        if(type=='filters'){
          this.offset = 0;
        }
        var params = {params: {limit: this.limit, offset: this.calculateOffset()}};
        axios.get('/api/partners/'+this.partner.id+'/waaccs', params).then(response => {
          var obj = response.data;
          if(obj && !obj.error){
            this.waaccs = obj.waaccs;

            if(type=='filters'){
              this.current_page = 1;
            }

            this.page_number = Math.ceil(obj.waaccs_count/this.limit);
            this.calculatePageRange();
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
