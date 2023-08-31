<script>
import axios from 'axios';
import { store } from '../store';

import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'SingleProject',
    components:{
        AppLoader
    },
    data() {
        return {
            store,
            project: null
        }
    },
    created() {
        this.getSingleProject();
    },
    methods: {
        getSingleProject(){
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) =>{
                if(response.data.success){
                    this.project = response.data.project;
                    this.store.loading = false;
                }
                else{
                    this.$router.push({ name: 'not-found'})
                }
            })
        }
    },
}
</script>
<template lang="">
    <div>
        <AppLoader v-if="store.loading" />
        <div v-else>
            <div class="container">
                <div class="row my-5">
                    <div class="col-12">
                        <h1 class="text-center">{{ project.title }}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <img :src="`${store.baseUrl}/storage/${project.image}`" width="300" />
                    </div>
                    <div class="col-12" v-if="project.type">
                        <strong>Tipo:</strong> {{ project.type.name }}
                    </div>
                    <div class="col-12" v-if="project.technologies">
                        <span class="badge rounded-pill text-bg-primary me-2" v-for="technology in project.technologies">{{ technology.name }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p>{{ project.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>