<script>
import AppLoader from './AppLoader.vue';
import axios from 'axios';

export default{
    name: 'AppMain',
    components:{
        AppLoader
    },
    data(){
        return{
            baseUrl: 'http://localhost:8000',
            projects: [],
            loading: true,
            maxNumCharacters: 60
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
                else{
                    
                }
            })
        },
        truncateText(text){
            if(text.length > this.maxNumCharacters){
                return text.substr(0,this.maxNumCharacters) + '...';
            }

            return text;
        }
    }
}
</script>

<template>
  <div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center">BOOLFOLIO</h1>
        </div>
    </div>
  </div>
  <AppLoader v-if="loading" />
  <div v-else class="container">
    <div class="row">
        <div class="col-12 col-md-4" v-for="project in projects" :key="project.id">
            <div class="card my-3 min-height-200px">
                <div class="card-title">
                    {{ project.title }}
                </div>
                <div class="card-image-top">
                    <img :src="`${baseUrl}/storage/${project.image}`" class="img-fluid">
                </div>
                <div class="card-body">
                    <p>
                        <span v-if="project.type"><strong>{{ project.type.name }}</strong></span>
                        <span v-else><strong>Tipo non assegnato</strong></span>
                    </p>
                    <p v-if="project.technologies">
                        <span class="badge text-bg-primary me-3" v-for="technology in project.technologies" :key="technology.id">
                            {{ technology.name }}
                        </span>
                    </p>
                    <p>{{ truncateText(project.content) }}</p>
                </div>
                <div class="card-footer">
                    <a href="" class="btn btn-sm btn-primary"> Leggi il progetto</a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
    .min-height-200px{
        height:200px;
    }
</style>
