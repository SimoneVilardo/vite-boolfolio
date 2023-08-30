<script>
import AppLoader from '../components/AppLoader.vue';
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
import { store } from '../store.js';

export default{
    name: 'ProjectList',
    components:{
        AppLoader,
        ProjectCard
    },
    data(){
        return{
            store,
            projects: [],
            currentPage: 1,
            lastPage: null
        }
    },
    created(){
        this.getProjects(1);
    },
    methods:{
        getProjects(num_page){
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/projects`, { params: { page:num_page }}).then((response) => {
            this.projects = response.data.results.data;
            this.currentPage = response.data.results.current_page;
            this.lastPage = response.data.results.last_page;
            this.store.loading = false;
        })},

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
    <AppLoader v-if="store.loading" />
    <div v-else class="container">
        <div class="row">
            <div class="col-12 col-md-4" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project"/>
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
