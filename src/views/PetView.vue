<script setup>
import { onMounted, ref } from 'vue';
const API_URL = 'http:localhost:3000'
const pets = ref([]); 'pets'
const tutores = ref([]); 'tutores'
async function carregarDados() {
const respostaPets = await fetch(`${API_URL}/pets`);
pets.value = await respostaPets.json();
const respostaTutores = await fetch(`${API_URL}/tutores`);
tutores.value = await respostaTutores.json();
}

onMounted(() => {
  carregarDados();
});

</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pets</h1>
      <p class="text-body-secondary mb-0">
        Listagem dos Pets cadastrados no sistema.
      </p>
    </header>

    <RouterLink
      class="btn btn-primary"
      :to="{ name: 'addPet' }"
    >
      Adicionar Pet
    </RouterLink>
  </div>
</template>