<template>
  <b-col>
    <h1>Short your url</h1>
    <div class="urlForm">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Full url address:" label-for="full-url-input">
          <b-form-input id="full-url-input" v-model="form.urlLong" type="url" required
                        placeholder="Enter url"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
      <pulse-loader :loading="!show" size="25px"></pulse-loader>
    </div>
  </b-col>
</template>

<script>
import {sendFullUrlLink} from "@/services/UrlShorterService"
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  components: {PulseLoader},
  name: 'UrlField',
  data() {
    return {
      form: {
        urlLong: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.show = false;
      sendFullUrlLink(this.form).then(response => {
        console.log(response);
        if (response.status !== 200) {
          this.$router.push('/fail');
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
