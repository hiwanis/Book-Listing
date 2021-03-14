<template>
  <div class="addBooks">
    <div class="container">
      <heading/>
      <form>
        <div class="d-flex flex-row justify-content-center">
          <div class="bookItems">
            <ul class="list-unstyled">
              <coverimg/>
              <name/>
              <description/>
              <author/>
              <available/>
              <stateList/>
            </ul>
            <div class="col-12 text-center">
              <button class="btn btn-info">Submit</button>
            </div>
            <div class="link text-center mt-5">
              <n-link to="/listOfBooks"> Go to the List of Books </n-link>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  </template>

<script>
  import heading from "~/components/heading.vue"
  import coverimg from "~/components/coverimg.vue"
  import name from "~/components/name.vue"
  import description from "~/components/description.vue"
  import author from "~/components/author.vue"
  import available from "~/components/available.vue"
  import stateList from "~/components/stateList.vue"
export default {

}
</script>

<style>
body{
    background: linear-gradient(#e3fdf5,#ffe6fa);
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    min-height: 100vh;
    padding-bottom: 30px;
}
.bookItems li {
  margin: 30px 0;
}
.bookItems input, .bookItems textarea {
  outline: none;
}
.bookItems input:focus, .bookItems textarea:focus{
  border: 1px solid #17a2b8;
}
.link a{
  color: #212529;
  text-decoration: none;
}
.link a:hover {
  color: #17a2b8;
}
</style>
