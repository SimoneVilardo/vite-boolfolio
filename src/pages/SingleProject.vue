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
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">{{ project.title }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>