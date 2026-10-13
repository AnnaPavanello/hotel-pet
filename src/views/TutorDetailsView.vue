<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const API_URL = 'http://localhost:3000';
const tutor = ref({});
const pets = ref([]);

async function carregarTutor() {
  try {
    const respostaTutor = await fetch(`${API_URL}/tutores/${route.params.id}`);
    if (!respostaTutor.ok) {
      console.log('Opees, tutor não encontrado!');
    }
    tutor.value = await respostaTutor.json();

    // Carrega todos os pets e filtra pelos que pertencem a este tutor
    const respostaPets = await fetch(`${API_URL}/pets`);
    if (respostaPets.ok) {
      const todosPets = await respostaPets.json();
      pets.value = todosPets.filter(pet => Number(pet.tutorId) === Number(route.params.id));
    }
  } catch (erro) {
    console.error('Erro ao carregar os dados do tutor e dos pets:', erro);
  }
}

onMounted(carregarTutor);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Nome: {{ tutor.nome }}</h1>
    <p>E-mail: {{ tutor.email }}</p>
    <p>Telefone: {{ tutor.telefone }}</p>

    <h2 class="text-xl font-semibold mt-4 mb-2">Pets cadastrados:</h2>
    <ul class="list-disc pl-5">
      <li v-for="pet in pets" :key="pet.id">
        {{ pet.nome }} ({{ pet.especie }})
      </li>
    </ul>
  </div>
</template>