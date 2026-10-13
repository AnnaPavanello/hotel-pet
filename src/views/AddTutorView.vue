<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router'; 

  const API_URL = 'http://localhost:3000';
  const router = useRoute();

  // Objeto reativo para salvar os dados do novo tutor
  const novoTutor = ref({
    nome: '',
    email: '',
    telefone: '',
  });

  async function salvarTutor() {
    // Fazendo a requisição para a API para o servidor na rota de tutores
    await fetch(`${API_URL}/tutores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoTutor.value),
    });
    
    // Redireciona para a listagem de tutores 
    router.push({ 'name': 'tutores' });

    // Limpando os campos do formulário
    novoTutor.value = {
      nome: '',
      email: '',
      telefone: '',
    };
  }
</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Cadastro de Tutores</h1>
      <p class="text-body-secondary mb-0">Cadastro de Tutores no sistema.</p>
    </header>

    <form @submit.prevent="salvarTutor">
      <div class="col-md-6 mb-3">
        <label for="nome" class="form-label">Nome do tutor:</label>
        <input
          type="text"
          id="nome"
          v-model="novoTutor.nome"
          class="form-control"
          required
        />
      </div>

      <div class="col-md-6 mb-3">
        <label for="email" class="form-label">E-mail:</label>
        <input
          type="email"
          id="email"
          v-model="novoTutor.email"
          class="form-control"
          required
        />
      </div>

      <div class="col-md-6 mb-3">
        <label for="telefone" class="form-label">Telefone:</label>
        <input
          type="text"
          id="telefone"
          v-model="novoTutor.telefone"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-success">Salvar</button>
    </form>
  </div>
</template>