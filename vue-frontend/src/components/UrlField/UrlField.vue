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
    </div>
  </b-col>
</template>

<script>
import {sendFullUrlLink} from "@/services/UrlShorterService"

export default {
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
      sendFullUrlLink(this.form).then(response => {
        console.log(response);
        this.show = false;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "UrlFieldCss.css";
</style>
