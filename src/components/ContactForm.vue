<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ContactForm',
    data(){
        return{
            store,
            name: '',
            email: '',
            messagge: '',
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm(){
            const data = {
                name: this.name,
                email: this.email,
                content: this.message
            }

            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if(!this.success){
                    this.errors = response.data.errors;
                }
                else{
                    this.name = '';
                    this.email = '';
                    this.messagge = '';
                }
            })
        }
    },
}
</script>
<template lang="">
    <div>
        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="text-center">Contattaci</h2>
                    </div>
                    <div v-if="success" class="col-12">
                        <div class="alert">
                            Messaggio inviato con successo
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <form @submit.prevent="sendFrom()" class="row">
                            <div class="col-12 col-md-6">
                                <label class="control-label">Nome e Cognome</label>
                                <input type="text" name="name" id="name" v-model="name" placeholder="Nome" class="form-control" :class="errors.name ? 'is-invalid' : ''">
                                <p v-for="(error, index) in errors.name" :key="index" class="text-danger">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Email</label>
                                <input type="mail" name="email" id="email" v-model="email" placeholder="Email" class="form-control" :class="errors.email ? 'is-invalid' : ''">
                                <p v-for="(error, index) in errors.email" :key="index" class="text-danger">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Contenuto</label>
                                <input type="mail" name="content" id="content" v-model="content" placeholder="Messaggio" class="form-control" :class="errors.content ? 'is-invalid' : ''">
                                <p v-for="(error, index) in errors.content" :key="index" class="text-danger">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="col-12 my-5">
                                <button class="btn btn-sm btn-success" type="submit" :disabled="loading">{{ loading ? 'Invio email in corso' : 'Invia' }}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>