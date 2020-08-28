<template>
    <h3>社員情報一覧</h3>
    <div id="employee-list">
        <table>
            <thead>
                <tr>
                    <th>
                        社員名
                    </th>
                    <th>
                        社員メール
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>
                        {{ employee.name }}
                    </td>
                    <td>
                        {{ employee.email }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "employee-list",
        props: {
            employees: Array,
        },
    }
</script>

<style scoped>
    #employee-list {
        background: #EFF2F5;
        color: #000;
    }

    thead {
        background: #000;
        color: #fff;
    }
</style>