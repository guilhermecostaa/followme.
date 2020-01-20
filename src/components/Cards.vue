<template>
  <div class="animated fadeIn">
    <b-card-group deck>
      <b-card
        v-for="(interestPoint,index) in currentPagePoints"
        :key="index"
        img-src="https://placekitten.com/g/300/300"
        img-alt="Img"
        img-top
      >
        <h4 class="card-title">{{interestPoints.name}}</h4>
        <p class="card-text">{{interestPoints.city}}</p>
        <p class="card-text">{{interestPoints.desc}}</p>
        <div slot="footer">
          <b-btn variant="primary" block>Add</b-btn>
        </div>
      </b-card>
    </b-card-group>

    <div class="card-pagination">
      <div
        class="page-index"
        v-for="i in nbPages"
        :key="i"
        @click="goto(i)"
        :class="{active:currentPage(i)}"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      interestPoints:[],
      paginatedPoints: [],
      nbPages: 0,
      nbRowPerPage: 4,
      currentPageIndex: 0
    };
  },
  computed: {
    formattedPoint() {
      return this.interestPoints.reduce((c, n, i) => {
        if (i % 4 === 0) c.push([]);
        c[c.length - 1].push(n);
        return c;
      }, []);
    },
    currentPagePoints() {
      this.createPages();

      return this.paginatedPoints[this.currentPageIndex];
    },
    ...mapGetters(["getInterestPoints"])
  },
  methods: {
    currentPage(i) {
      return i - 1 === this.currentPageIndex;
    },
    createPages() {
      let lengthAll = Object.keys(this.clubs).length;
      this.nbPages = 0;
      for (let i = 0; i < lengthAll; i = i + this.nbRowPerPage) {
        this.paginatedPoints[this.nbPages] = this.clubs.slice(
          i,
          i + this.nbRowPerPage
        );
        this.nbPages++;
      }
    },
    goto(i) {
      this.currentPageIndex = i - 1;
    }
  }
};
</script>
<style>
.card-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.page-index {
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: #007bff;
}
.active {
  width: 20px;
  height: 20px;
  border-radius: 20px;
}
</style>