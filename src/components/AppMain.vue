<script>
import axios from 'axios';

export default{
    name: 'AppMain',
    data(){
        return{
            baseUrl: 'http://localhost:8000',
            projects: [],
            loading: true
        }
    },
    created(){
        this.getProjects();
    },
    methods:{
        getProjects(){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`).then((response) =>{
                if(response.data.success){
                    this.projects = response.data.results;
                    this.loading = false;
                }
            })
        }
    }
}
</script>

<template>
  <div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center"></h1>
        </div>
    </div>
  </div>
</template>

<style>

</style>
