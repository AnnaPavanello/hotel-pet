import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: '/pets',
      component: () => import('../views/PetView.vue'),
    },
    {
      path: '/pets',
      name: 'pets',
      component: () => import('../views/PetView.vue'),
    },
    {
      path: '/pets/novo',
      name: 'addPet',
      component: () => import('../views/AddPetView.vue'),
    },    
    {
      path: '/pets/:id',
      name: 'detalhes-pet',
      component: () => import('../views/PetDetailsView.vue'),
    },
    {
      path: '/tutor',
      name: 'tutor',
      component: () => import('../views/TutorView.vue'),
    },
    {
      path: '/tutor/novo',
      name: 'addtutor',
      component: () => import('../views/AddTutorView.vue'),
    },    
    {
      path: '/tutor/:id',
      name: 'detalhes-tutor',
      component: () => import('../views/TutorDetailsView.vue'),
    },
  ],
});

export default router;
