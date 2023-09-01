<script>
import axios from 'axios';
import { store } from '../store';


export default {
    name: 'ContactForm',
    data(){
        return {
            store,
            loading: false,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm(){
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                content: this.message
            }

            //pulisco l'array degli errori
            this.errors = {};

            //effettuiamo la chiamata axios in post
            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if(!this.success){
                    this.errors = response.data.errors;
                }
                else{
                    //ripuliamo i dati in input
                    this.name = '';
                    this.email = '';
                    this.message = '';

                    this.$router.push({ name: 'thank-you' })
                }
                this.loading = false
            })
        }
    }
}
</script>

<template>
    <div class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">Contatti</h2>
                </div>
                <!-- <div v-if="success" class="col-12">
                    <div class="alert alert-success">
                        Messaggio inviato con successo
                    </div>
                </div> -->
            </div>
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent="sendForm()" class="row">
                        <div class="col-12 col-md-6">
                            <label class="control-label">Nome e Cognome</label>
                            <input type="text" name="name" v-model="name" placeholder="Nome" class="form-control" :class="errors.name ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.name" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="control-label">Email</label>
                            <input type="text" name="email" v-model="email" placeholder="Email" id="email" class="form-control" :class="errors.email ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.email" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="control-label">Contenuto</label>
                            <textarea name="content" v-model="message" placeholder="Messaggio" id="content" class="form-control" :class="errors.content ? 'is-invalid' : ''">

                            </textarea>
                            <p v-for="(error, index) in errors.content" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-sm btn-success" type="submit" :disabled="loading">
                                {{ loading ? 'Invio mail in corso' : 'Invia' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>