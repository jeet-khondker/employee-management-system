<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>社員管理システム</h1>

    <employee-form />
    <employee-list v-bind:employees="employees"/>
  </div>
</template>

<script>
  import EmployeeList from '@/components/EmployeeList.vue'
  import EmployeeForm from '@/components/EmployeeForm.vue'

  export default {
    name: 'App',
    components: {
      EmployeeList,
      EmployeeForm
    },
    data() {
      return {
        employees: [
          {
            id: 1,
            name: "桑村",
            email: "tokio.kuwamura@code.com",
          },
          {
            id: 2,
            name: "鈴木",
            email: "ayumu.suzuki@code.com",
          },
          {
            id: 3,
            name: "長友",
            email: "syouya.nagatomo@code.com",
          },
        ],
      }
    },
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
