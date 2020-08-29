<template>
    <h3>社員情報一覧</h3>
    <div id="employee-list">
        <p v-if="employees.length < 1" class="empty-list">社員無し</p>
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
                    <td class="text-center">
                        {{ employee.name }}
                    </td>
                    <td class="text-center">
                        {{ employee.email }}
                    </td>
                    <td class="text-center">
                        <button class="edit">📝 更新</button>
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
</style>