<script>
export default {
    name:"AppHeader",
    data(){
        return{
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Chi siamo',
                },
                {
                    label: 'Articoli',
                    routeName: 'projects'
                },
                {
                    label: 'Categorie',
                },
                {
                    label: 'Contatti',
                    routeName: 'contact-us'
                },
            ]
        }
    }
}
</script>
<template lang="">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                    <router-link class="nav-link " :to="{ name: item.routeName }">{{ item.label }} </router-link>  
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>
<style lang="">
    
</style>