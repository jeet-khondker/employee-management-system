<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>社員管理システム</h1>
    <employee-list />
  </div>
</template>

<script>
import EmployeeList from '@/components/EmployeeList.vue'

export default {
  name: 'App',
  components: {
    EmployeeList
  }
}
</script>

<style>
  body {
    background: #E5E5E5;
  }

  #app {
    text-align: center;
    margin: 50px 200px;
  }

  .container {
      max-width: 100%;
  }

  button {
    background: #fff;
    border: 3px solid #013cff;
    color: #000;
  }
  button:hover {
    background: #013cff;
    color: #fff;
    border: 3px solid #fff;

  }
</style>
