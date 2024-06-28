<script setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

const email = ref('')
const password = ref('')

function onSubmit() {
    userStore.login(email.value, password.value, router)
    
}
</script>

<template>
    <div className="container">
        <div className="card">
            <div className="card-header text-center">
                <h1>Sign In</h1>
            </div>
            <div className="card-body">
                <form id="login-form" @submit.prevent="onSubmit">
                    <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" v-model="email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="password" v-model="password" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
            <div className="card-footer text-center">
                <p>doesn't have a account? please <a href="http://localhost:3000/register">sign up</a></p>
            </div>
        </div>
    </div>
</template>