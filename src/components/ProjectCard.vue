<script>
import { store } from '../store.js'
export default {
    name:"ProjectCard",
    props: {
        project : Object
    },
    data(){
        return{
            store,
            maxNumCharacters: 60,
        }
    },
    methods: {
        truncateText(text){
            if(text.length > this.maxNumCharacters){
                return text.substr(0,this.maxNumCharacters) + '...';
            }

            return text;
        }
    },
}
</script>
<template lang="">
    <div class="card my-3 min-height-200px">
            <div class="card-image-top">
                <img :src="`${this.store.baseUrl}/storage/${project.image}`" class="img-fluid">
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
</template>
<style lang="">
    
</style>