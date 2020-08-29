<template>
  <div id="app" class="container">
    <h1>新社員登録</h1>

    <employee-form v-on:addemployee="addEmployee"/>
    <employee-list 
      :employees="employees" 
      v-on:deleteemployee="deleteEmployee" 
      v-on:editemployee="editEmployee"
    />
  </div>
</template>

<script>
  import EmployeeList from '@/components/EmployeeList.vue'
  import EmployeeForm from '@/components/EmployeeForm.vue'

  export default {
    name: 'Home',
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
    methods: {
      addEmployee(employee) {
        const lastId = this.employees.length > 0 ? this.employees[this.employees.length - 1].id : 0;
        const id = lastId + 1;
        const newEmployee = { ...employee, id };
        this.employees = [...this.employees, newEmployee]
      },
      editEmployee(id, updatedEmployee) {
        this.employees = this.employees.map(employee => employee.id === id ? updatedEmployee : employee)
      },
      deleteEmployee(id) {
        this.employees = this.employees.filter(employee => employee.id !== id)
      }
    }
  }
</script>

<style>
  body {
    background: #E5E5E5;
  }

  #app {
    text-align: center;
    margin: 0px 100px;
  }

  .container {
      max-width: 100%;
  }
</style>
