<script>
import AppLoader from '../components/AppLoader.vue';
import axios from 'axios';

export default{
    name: 'ProjectList',
    components:{
        AppLoader
    },
    data(){
        return{
            baseUrl: 'http://localhost:8000',
            projects: [],
            loading: true,
            maxNumCharacters: 60,
            currentPage: 1,
            lastPage: null
        }
    },
    created(){
        this.getProjects(1);
    },
    methods:{
        getProjects(num_page){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`, { params: { page:num_page }}).then((response) => {
            this.projects = response.data.results.data;
            this.currentPage = response.data.results.current_page;
            this.lastPage = response.data.results.last_page;
            this.loading = false;
        })},

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
                <div class="card-image-top">
                    <img :src="`${baseUrl}/storage/${project.image}`" class="img-fluid">
                </div>
                <div class="card-body">
                    <div class="card-title">
                        {{ project.title }}
                    </div>
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
                    <a href="#" class="btn btn-sm btn-primary"> Leggi il progetto</a>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
        <div class="col-12">
            <nav class="d-flex justify-content-center">
                <ul class="pagination">
                    <li :class="currentPage === 1 ? 'disabled' : ''">
                        <button class="page-link" @click="getProjects(currentPage - 1)">
                            Precedente
                        </button>
                    </li>
                    <li :class="currentPage === lastPage ? 'disabled' : ''">
                        <button class="page-link" @click="getProjects(currentPage + 1)">
                            Successivo
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
    .min-height-200px{
        height:200px;
    }
</style>
