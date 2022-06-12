<template>
  <ion-card>
    <ion-card-header>
       <ion-card-subtitle></ion-card-subtitle>
       <ion-card-title>{{ role.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-button>
        <ion-icon name="remove-outline" size="small"></ion-icon>
      </ion-button>

      {{ counter }}

      <ion-button>
        <ion-icon name="add-outline" @click="add" size="small"></ion-icon>
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { IonContent,
  IonCard, IonCardTitle,
  IonIcon, IonCardHeader,
  IonPage, IonCardSubtitle,
  IonCardContent, IonButton
} from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewMessagePage',
  props: ['role'],
  data() {
    return {
      counter: 0,
      add() {
        this.counter++;
        console.log(this.counter);
      }
    }
  },
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon
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