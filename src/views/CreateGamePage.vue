<template>
  <ion-page>
    <ion-list v-for="role in roles" :key="role.id">
      <RoleCard :role="role"></RoleCard>
    </ion-list>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import RoleCard from '@/components/RoleCard.vue'
import {getRoles} from "@/data/messages";
export default defineComponent({
  name: 'ViewMessagePage',
  data() {
    return {
      roles: getRoles()
    }
  },
  components: {
    IonPage,
    RoleCard
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}
ion-card {
  width: 30vw;
}
ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>
