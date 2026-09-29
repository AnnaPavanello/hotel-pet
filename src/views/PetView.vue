<script setup>
import { onMounted, ref } from 'vue';

const API_URL = 'http://localhost:3000';

const pets = ref([]);
const tutores = ref([]);
const carregando = ref(true);
const erro = ref('');

async function carregarPets() {
  carregando.value = true;
  erro.value = '';

  try {
    const respostaPets = await fetch(`${API_URL}/pets`);
    if (!respostaPets.ok) {
      throw new Error('Não foi possível carregar os pets.');
    }
    pets.value = await respostaPets.json();

    const respostaTutores = await fetch(`${API_URL}/tutores`);
    if (!respostaTutores.ok) {
      throw new Error('Não foi possível carregar os tutores.');
    }
    tutores.value = await respostaTutores.json();
  } catch {
    erro.value = 'Não foi possível carregar os pets. Tente novamente.';
  } finally {
    carregando.value = false;
  }
}

onMounted(carregarPets);
</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pets</h1>
      <p class="text-body-secondary mb-0">
        Listagem dos Pets cadastrados no sistema.
      </p>
    </header>
  </div>

  <p v-if="carregando" role="status">Carregando pets...</p>
  <p v-else-if="erro" role="alert">{{ erro }}</p>

  <table v-else>
    <thead>
      <th>ID</th>
      <th>Nome</th>
      <th>Espécie</th>
      <th>Tutor</th>
    </thead>
    <tbody>
      <tr
        v-for="pet in pets"
        :key="pet.id"
      >
        <td>{{ pet.id }}</td>
        <td>{{ pet.nome }}</td>
        <td>{{ pet.especie }}</td>
        <td>
          {{
            tutores.find((t) => t.id === pet.tutorId)?.nome ||
            'Não especificado'
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
