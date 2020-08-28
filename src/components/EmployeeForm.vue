<template>
    <div id="employee-form">
        <form>
            <input type="text" placeholder="社員名" />
            <input type="text" placeholder="社員メール" />
            <button>社員登録</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "employee-form",
        data() {
            return {
                employee: {
                    name: '',
                    email: '',
                },
            }
        },
    }
</script>

<style scoped>
    form {
        margin-bottom: 2rem;
    }

    input {
        border: 1px solid #000;
    }

    input:hover {
        border: 1px solid #013cff;
    }
</style>