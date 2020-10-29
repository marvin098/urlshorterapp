<template>
  <b-container>
    <b-row>
      <b-col>
        <h3 class="errorSpan">There was a error with link cut!</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="item">
          <b-button variant="primary"> Try again with the same link
          </b-button>
        </div>
      </b-col>
      <b-col>
        <div class="item">
          <router-link to="/">
            <b-button variant="warning"> Go back to main page
            </b-button>
          </router-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "UrlFieldFail"
}
</script>

<style scoped>
.errorSpan {
  color: red;
}
</style>