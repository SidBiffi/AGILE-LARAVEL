<template>
  <div>
    <div class="l-side-wrapper">
      <div class="heading">
        <h1>Chat</h1>
      </div>
      <div class="tab-heading">
        <span :class="tab=='open' ? 'active' : ''" @click="selectTab('open')">Aperte</span>
        <span :class="tab=='handled' ? 'active' : ''" @click="selectTab('handled')">Gestite</span>
        <span :class="tab=='all' ? 'active' : ''" @click="selectTab('all')">Tutte</span>
      </div>
      <div class="convs-wrapper">
        <h3>
          <span class="label">Assegnate a te</span>
        </h3>
        <div class="conv-wrapper" @click="selectConv(true)">
          <div class="contact-info">
            <span class="channel assigned whatsapp"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech <span class="hours">1 ora fa</span></span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina <span class="number gr-red">1</span></span>
            </div>
          </div>
          <div class="conv-data">
            <span class="state assigned">Assegnata a te</span>
            <span class="date">10/10/2024 <span class="space"></span> 17:10</span>
            <span class="place">Filiale Cuneo</span>
          </div>
        </div>
        <div class="conv-wrapper" @click="selectConv(true)">
          <div class="contact-info">
            <span class="channel assigned email"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech <span class="hours">1 ora fa</span></span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina <span class="number gr-orange">1</span></span>
            </div>
          </div>
          <div class="conv-data">
            <span class="state assigned">Assegnata a te</span>
            <span class="date">10/10/2024 <span class="space"></span> 17:10</span>
            <span class="place">Filiale Cuneo</span>
          </div>
        </div>
        <div class="conv-wrapper" @click="selectConv(true)">
          <div class="contact-info">
            <span class="channel assigned phone"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech <span class="hours">1 ora fa</span></span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina <span class="number gr-yellow">1</span></span>
            </div>
          </div>
          <div class="conv-data">
            <span class="state assigned">Assegnata a te</span>
            <span class="date">10/10/2024 <span class="space"></span> 17:10</span>
            <span class="place">Filiale Cuneo</span>
          </div>
        </div>
        <div class="conv-wrapper" @click="selectConv(true)">
          <div class="contact-info">
            <span class="channel assigned phone"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech <span class="hours">1 ora fa</span></span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina <span class="number gr-yellow">1</span></span>
            </div>
          </div>
          <div class="conv-data">
            <span class="state assigned">Assegnata a te</span>
            <span class="date">10/10/2024 <span class="space"></span> 17:10</span>
            <span class="place">Filiale Cuneo</span>
          </div>
        </div>
      </div>
      <div class="convs-wrapper">
        <h3>
          <span class="label">Nuove</span>
          <span class="value">(120 in coda)</span>
        </h3>
        <div class="conv-wrapper" @click="selectConv(true)">
          <div class="contact-info">
            <span class="channel new whatsapp"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech <span class="hours">1 ora fa</span></span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina <span class="number gr-red">1</span></span>
            </div>
          </div>
          <div class="conv-data">
            <span class="state new">Nuova</span>
            <span class="date">10/10/2024 <span class="space"></span> 17:10</span>
            <span class="place">Filiale Cuneo</span>
          </div>
        </div>
        <div class="conv-wrapper" @click="selectConv(true)">
          <div class="contact-info">
            <span class="channel new email"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech <span class="hours">1 ora fa</span></span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina <span class="number gr-orange">1</span></span>
            </div>
          </div>
          <div class="conv-data">
            <span class="state new">Nuova</span>
            <span class="date">10/10/2024 <span class="space"></span> 17:10</span>
            <span class="place">Filiale Cuneo</span>
          </div>
        </div>
        <div class="conv-wrapper" @click="selectConv(true)">
          <div class="contact-info">
            <span class="channel new phone"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech <span class="hours">1 ora fa</span></span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina <span class="number gr-yellow">1</span></span>
            </div>
          </div>
          <div class="conv-data">
            <span class="state new">Nuova</span>
            <span class="date">10/10/2024 <span class="space"></span> 17:10</span>
            <span class="place">Filiale Cuneo</span>
          </div>
        </div>
        <div class="conv-wrapper" @click="selectConv(true)">
          <div class="contact-info">
            <span class="channel new phone"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech <span class="hours">1 ora fa</span></span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina <span class="number gr-yellow">1</span></span>
            </div>
          </div>
          <div class="conv-data">
            <span class="state new">Nuova</span>
            <span class="date">10/10/2024 <span class="space"></span> 17:10</span>
            <span class="place">Filiale Cuneo</span>
          </div>
        </div>
        <div class="conv-wrapper" @click="selectConv(true)">
          <div class="contact-info">
            <span class="channel new phone"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech <span class="hours">1 ora fa</span></span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina <span class="number gr-yellow">1</span></span>
            </div>
          </div>
          <div class="conv-data">
            <span class="state new">Nuova</span>
            <span class="date">10/10/2024 <span class="space"></span> 17:10</span>
            <span class="place">Filiale Cuneo</span>
          </div>
        </div>
      </div>
    </div>
    <div class="c-side-wrapper">
      <template v-if="selected_conv">
        <div class="chat-wrapper">
          <div class="contact-info">
            <span class="channel assigned whatsapp"></span>
            <div class="c-name-wrapper">
              <span class="value">Marco New Tech</span>
            </div>
            <div class="o-name-wrapper">
              <span class="value">123456 - Nome Officina</span>
              <span class="divider"></span>
              <span class="phone">000 000 0000</span>
              <span class="divider"></span>
              <span class="email">contatto@gmail.com</span>
              <span class="divider"></span>
              <span class="place">Filiale Cuneo</span>
            </div>
          </div>
          <div class="messages-wrapper">

          </div>
        </div>
      </template>
      <template v-else>
        <div class="no-chat-selected">
          <div class="i-wrapper">
            <img src="/assets/logo_f.png" alt="Telos Link">
            <p><strong>Seleziona una chat per iniziare</strong> <br>(120 in coda)</p>
          </div>
        </div>
      </template>
    </div>
    <div class="r-side-wrapper">

    </div>
  </div>
</template>

<script>
  import * as hFunctions from '@/js/helpers/functions'

  export default {
    data(){
      return {
        chats: [],

        tab: 'open',

        selected_conv: null,
      }
    },

    created(){
      this.getInitValues();
    },

    methods: {
      ...hFunctions,

      selectTab(tab){
        if(this.tab!=tab){
          this.tab = tab;
        }
      },

      selectConv(conv){
        this.selected_conv = conv;
      },

      getInitValues(type=null){
        axios.get('/api/chats').then(response => {
          var obj = response.data;
          if(obj && !obj.error){
            this.chats = obj.chats;
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
