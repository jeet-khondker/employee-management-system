<template>
    <div id="employee-form">
        <form @submit.prevent="handleSubmit">
            <input 
                v-model="employee.name" 
                type="text" 
                placeholder="新社員名" 
                :class="{ 'has-error': submitting && invalidName }" 
                @focus="clearStatus" 
                @keypress="clearStatus"
            />
            <input 
                v-model="employee.email" 
                type="text" 
                placeholder="新社員メール" 
                :class="{ 'has-error': submitting && invalidEmail }" 
                @focus="clearStatus" 
            />
            <p v-if="error && submitting" class="error-message">
                ❌ 全項目を入力してください！
            </p>
            <p v-if="success" class="success-message">
                ✅ 新社員が成功に登録されました！
            </p>
            <button>新社員登録</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "employee-form",
        data() {
            return {
                submitting: false,
                error: false,
                success: false,
                employee: {
                    name: '',
                    email: '',
                },
            }
        },
        methods: {
            handleSubmit() {
                this.submitting = true
                this.clearStatus()

                if (this.invalidName || this.invalidEmail) {
                    this.error = true
                    return
                }

                this.$emit("addemployee", this.employee)

                this.employee = {
                    name: '',
                    email: '',
                }

                this.error = false
                this.success = true
                this.submitting = false
            },

            clearStatus() {
                this.success = false
                this.error = false
            }
        },
        computed: {
            invalidName() {
                return this.employee.name === ''
            },

            invalidEmail() {
                return this.employee.email === ''
            },
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

    [class*="-message"] {
        font-weight: 500;
    }

    .error-message {
        color: #000;
        background: #f8adaf;
        padding: 10px;
    }

    .success-message {
        color: #000;
        padding: 10px;
        background: #84fdb1;
    }
</style>