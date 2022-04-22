<template>
  <div>
    <form
      action="#"
      class="search-form"
      @submit.prevent="$emit.filter(userSearch)"
    >
      <input type="text" class="search-field" v-model="userSearch" />
      <button type="submit" class="btn-search">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userSearch: ""
    };
  }
};
</script>
