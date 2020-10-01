<template>
  <div class="myMap">
    <l-map ref="myMap" :zoom="zoom" :center="center"
      :options="options" style="height: 100vh;">
      <l-tile-layer :url="url" :attribution="attribution"/>
      <l-marker ref="userMarker" :lat-lng="center">
        <l-icon :icon-url="icon.red"
          :icon-size="icon.iconSize"
          :icon-anchor="icon.iconAnchor"
          :popup-anchor="icon.popupAnchor"
          :shadow-size="icon.shadowSize"/>
      </l-marker>
      <v-marker-cluster>
        <l-marker :lat-lng="switchLatLng(item.geometry.coordinates)"
          v-for="(item,index) in m_opendata2" :key="index">
            <l-icon :icon-url="icon.blue"
              :icon-size="icon.iconSize"
              :icon-anchor="icon.iconAnchor"
              :popup-anchor="icon.popupAnchor"
              :shadow-size="icon.shadowSize"/>
            <l-popup>
              <h4>{{ item.properties.name }}</h4>
              {{ item.properties.address }}<br>
              {{ item.properties.phone }}<br><br>
              成人口罩剩餘數: {{ item.properties.mask_adult }}<br>
              兒童口罩剩餘數: {{ item.properties.mask_child }}
            </l-popup>
        </l-marker>
      </v-marker-cluster>
    </l-map>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'PharmacyMap',

  data() {
    return {
      zoom: 15,
      center: [22.612961, 120.304167],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '',
      options: {
        zoomControl: false,
      },
      icon: {
        red: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        blue: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      },
    };
  },

  created() {
    this.$store.dispatch('fetchOpenData2');
  },

  mounted() {
    this.setUserPosition();
  },

  computed: mapGetters({
    m_opendata2: 'getOpenData2',
  }),

  methods: {
    ...mapActions([
    ]),

    ...mapMutations([
    ]),

    switchLatLng(arr) {
      return [arr[1], arr[0]];
    },

    setUserPosition() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const pos = [];
          pos[0] = position.coords.latitude;
          pos[1] = position.coords.longitude;

          this.$refs.myMap.mapObject.panTo(pos, { animate: true });
          this.$refs.userMarker.mapObject.setLatLng(pos);
        });
      }
    },
  },
};
</script>
