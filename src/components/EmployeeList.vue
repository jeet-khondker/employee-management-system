<template>
    <h3>社員情報一覧</h3>
    <div id="employee-list">
        <h5 v-if="employees.length < 1" class="empty-list">社員無し</h5>
        <table v-else>
            <thead>
                <tr>
                    <th class="text-center">
                        社員名
                    </th>
                    <th class="text-center">
                        社員メール
                    </th>
                    <th class="text-center">
                        操作
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td class="text-center" v-if="editing === employee.id">
                        <input type="text" v-model="employee.name" />
                    </td>
                    <td class="text-center" v-else>
                        {{ employee.name }}
                    </td>
                    <td class="text-center" v-if="editing === employee.id">
                        <input type="text" v-model="employee.email" />
                    </td>
                    <td class="text-center" v-else>
                        {{ employee.email }}
                    </td>
                    <td v-if="editing === employee.id">
                        <button @click="editEmployee(employee)" class="save">💾 保存</button>
                        <button @click="cancelEdit(employee)" class="cancel">❌ キャンセル</button>
                    </td>
                    <td class="text-center" v-else>
                        <button class="edit" @click="editMode(employee)">📝 更新</button>
                        <button class="delete" @click="$emit('deleteemployee', employee.id)">🗑 削除</button>
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
        data() {
            return {
                editing: null,
            }
        },
        methods: {
            editMode(employee) {
                this.cachedEmployee = Object.assign({}, employee)
                this.editing = employee.id
            },

            cancelEdit(employee) {
                Object.assign(employee, this.cachedEmployee)
                this.editing = null;
            },

            editEmployee(employee) {
                if (employee.name === '' || employee.email === '') return
                this.$emit('edit-employee', employee.id, employee)
                this.editing = null
            }
        }
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

    button.edit {
        background: #fff;
        border: 3px solid #0f8b1f;
        color: #000;
        margin: 0 10px 0 0;
    }
    button.edit:hover {
        background: #0f8b1f;
        color: #fff;
        border: 3px solid #fff;
        margin: 0 10px 0 0;
    }

    button.delete {
        background: #fff;
        border: 3px solid #f80303;
        color: #f80303;
        margin: 0 10px 0 0;
    }
    button.delete:hover {
        background: #f80303;
        color: #fff;
        border: 3px solid #fff;
        margin: 0 10px 0 0;
    }

    button.save {
        background: #fff;
        border: 3px solid #5d6d06;
        color: #000;
        margin: 0 10px 0 140px;
    }
    button.save:hover {
        background: #5d6d06;
        color: #fff;
        border: 3px solid #fff;
        margin: 0 10px 0 140px;
    }

    button.cancel {
        background: #fff;
        border: 3px solid #000;
        color: #000;
        margin: 0 10px 0 0;
    }
    button.cancel:hover {
        background: #000;
        color: #fff;
        border: 3px solid #fff;
        margin: 0 10px 0 0;
    }

    .empty-list {
        text-align: center;
        background: #E5E5E5;
    }
</style>