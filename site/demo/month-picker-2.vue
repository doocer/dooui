<template>
<du-month-picker :format="format"></du-month-picker>
</template>

<script>
export default {
  methods: {
    format(year, month) {
      return year + '年' + month + '月'
    }
  }
}
</script>
