<script setup>
import { RouterView } from 'vue-router';
import DefautLayout from './components/layout/DefautLayout.vue';
import AppNavbar from './components/layout/AppNavbar.vue';
import AppSlidebar from './components/layout/AppSlidebar.vue';
</script>

<template>
  <RouterView />
  <DefautLayout/>
  <AppNavbar/>
  <AppSlidebar/>
</template>
