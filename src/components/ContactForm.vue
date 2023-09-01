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
        
    </div>
</template>
<style lang="">
    
</style>