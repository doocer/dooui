<template>
<div>
<p>Current Page: {{page}}</p>
<du-pagination :page="3" :perpage="10" :total="368" @change="change">
  <du-pagination-pager prev next :edge="4"></du-pagination-pager>
</du-pagination>
</div>
</template>

<script>
export default {
  data() {
    return {
      page: 3
    }
  },
  methods: {
    change(num) {
      this.page = num
    }
  }
}
</script>
