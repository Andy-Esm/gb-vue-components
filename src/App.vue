<template>
  <header>
    <div class="logo">E-shop</div>
    <div class="cart">
      <!--<form action="#" class="search-form" @submit.prevent="filter">
                <input type="text" class="search-field" v-model="userSearch">
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>-->
      <filter-products></filter-products>
      <button class="btn-cart" type="button" @click="showCart = !showCart">
        Корзина
      </button>
      <cart-body
        :cart-items="cartItems"
        :img="imgCart"
        :visibility="showCart"
        @remove="remove"
      ></cart-body>
    </div>
  </header>
  <main>
    <ProductList
      :products="filtered"
      :img="imgProduct"
      @add-product="addProduct"
    ></ProductList>
  </main>
</template>

<script>
const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
export default {
  name: "App",
  components: {},
  data() {
    return {
      userSearch: "",
      showCart: false,
      catalogUrl: "/catalogData.json",
      cartUrl: "/getBasket.json",
      cartItems: [],
      filtered: [],
      imgCart: "https://placehold.it/50x100",
      products: [],
      imgProduct: "https://placehold.it/200x150"
    };
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => console.log(error));
    },
    addProduct(item) {
      this.getJson(`${API}/addToBasket.json`).then(data => {
        if (data.result === 1) {
          let find = this.cartItems.find(
            el => el.id_product === item.id_product
          );
          if (find) {
            find.quantity++;
          } else {
            const prod = Object.assign({ quantity: 1 }, item);
            this.cartItems.push(prod);
          }
        }
      });
    },
    remove(item) {
      this.getJson(`${API}/addToBasket.json`).then(data => {
        if (data.result === 1) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
          }
        }
      });
    },
    filter(userSearch) {
      let regexp = new RegExp(userSearch, "i");
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    }
  },
  mounted() {
    this.getJson(`${API + this.cartUrl}`).then(data => {
      for (let item of data.contents) {
        this.$data.cartItems.push(item);
      }
    });
    this.getJson(`${API + this.catalogUrl}`).then(data => {
      for (let item of data) {
        this.$data.products.push(item);
        this.$data.filtered.push(item);
      }
    });
    this.getJson(`getProducts.json`).then(data => {
      for (let item of data) {
        this.$data.products.push(item);
        this.$data.filtered.push(item);
      }
    });
  }
};
</script>

<style>
@import "nomalize.css";
@import "theme.css";
</style>
