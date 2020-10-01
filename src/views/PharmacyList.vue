<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-2">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              縣市
            </span>
          </div>
          <select id="searchCity" class="form-control" v-model="searchCity">
            <option value="all">未指定</option>
            <option v-for="(option, index) in m_cityoptions" :value="option" :key="index">
              {{ option }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-10 col-lg-2">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              地區
            </span>
          </div>
          <select id="searchRegion" class="form-control" v-model="searchRegion">
            <option value="all">未指定</option>
            <option v-for="(option,index) in m_regionoptions" :value="option" :key="index">
              {{ option }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-10 col-lg-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              篩選
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="機構名稱"
            v-model="searchKeyword"
            @keyup.enter="searchByKeyword">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" @click="searchByKeyword">查詢</button>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div v-if="m_opendata.length === 0" class="alert alert-info" role="alert">
      請先選擇搜尋方式
    </div>
    <div v-else>
      <div class="alert alert-success" role="alert">
        找到 {{ m_opendata.length }} 筆資料
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6" v-for="(item,index) in m_opendata" :key="index">
          <div class="card">
            <div class="card-body">
              <div class="caption">
                <h3>{{ item['醫事機構名稱'] }}</h3>
                <p>
                  <a :href="getGoogleMap(item['醫事機構地址'])" target="_blank">{{ item['醫事機構地址'] }}</a>
                </p>
                <p>{{ item['醫事機構電話'] }}</p>
                <p>成人口罩剩餘數: {{ item['成人口罩剩餘數'] }}</p>
                <p>兒童口罩剩餘數: {{ item['兒童口罩剩餘數'] }}</p>
                <small class="text-muted">資料時間: {{ item['來源資料時間'] }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'PharmacyList',

  data() {
    return {
      searchCity: 'all',
      searchRegion: 'all',
      searchKeyword: '',
    };
  },

  created() {
    this.searchCity = 'all';
    this.searchRegion = 'all';
    this.searchKeyword = '';

    this.$store.dispatch('resetState');
    this.$store.dispatch('fetchOpenData');
  },

  computed: mapGetters({
    m_opendata: 'getOpenData',
    m_cityoptions: 'getCityOptions',
    m_regionoptions: 'getRegionOptions',
  }),

  methods: {
    ...mapActions([
    ]),

    ...mapMutations([
    ]),

    getGoogleMap(address) {
      return `https://www.google.com/maps/place/${address}`;
    },

    searchByKeyword() {
      this.$store.dispatch('searchByKeyword', this.searchKeyword);
    },
  },

  watch: {
    searchCity(value) {
      this.searchRegion = 'all';
      this.searchKeyword = '';
      this.$store.dispatch('searchByCity', value);
    },

    searchRegion(value) {
      this.searchKeyword = '';
      this.$store.dispatch('searchByRegion', value);
    },
  },
};
</script>

<style>
  .card {
    height: 260px;
    margin-bottom: 22px;
  }
</style>
