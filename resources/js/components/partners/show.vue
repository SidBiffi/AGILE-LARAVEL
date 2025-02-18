<template>
  <div>
    <div class="p-heading">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h1>Socio: {{partner.company_name}}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="p-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h3>Canali</h3>
            <div class="row">
              <div class="col-12 col-md-4">
                <partner-mail :partner="partner"></partner-mail>
              </div>
              <div class="col-12 col-md-4">
                <partner-whatsapp :partner="partner"></partner-whatsapp>
              </div>
              <div class="col-12 col-md-4">
                <partner-wildix :partner="partner"></partner-wildix>
              </div>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="col-12">
            <h3>Utenti</h3>
            <div class="row">
              <div class="col-12">
                <partner-users :partner="partner"></partner-users>
              </div>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="col-12">
            <h3>Organizzazione</h3>
            <div class="row">
              <div class="col-12 col-md-6">
                <partner-hubs :partner="partner"></partner-hubs>
              </div>
              <div class="col-12 col-md-6">
                <partner-wplaces :partner="partner"></partner-wplaces>
              </div>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="col-12">
            <h3>Anagrafica</h3>
            <div class="row">
              <div class="col-12 col-md-6">
                <partner-clients :partner="partner"></partner-clients>
              </div>
            </div>
          </div>
        </div>
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

      }
    },

    methods: {
      ...hFunctions,
    }
  }
</script>
