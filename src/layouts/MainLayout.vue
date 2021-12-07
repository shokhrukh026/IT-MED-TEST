<template>
    <div class="main">
        <div class="header">
            <div class="header__top"></div>
            <div class="header__bottom">
                <div class="breadcrumb">
                    <router-link to="/" tag="a">Главная</router-link> 
                    <span class="mx-2">></span>
                    <router-link to="/form" tag="a">Форма</router-link>
                </div>
           
                <h2 class="title">Для тестового задания</h2>
            </div>
        </div>
        <router-view />
        <div class="footer">
            <div class="footer__top"></div>
            <div class="footer__bottom"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>