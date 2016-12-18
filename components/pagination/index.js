import Pagination from './Pagination.vue'
import PaginationPager from './PaginationPager.vue'
import PaginationGoto from './PaginationGoto.vue'

function install(Vue) {
  Vue.component(Pagination.name, Pagination)
  Vue.component(PaginationPager.name, PaginationPager)
  Vue.component(PaginationGoto.name, PaginationGoto)
}

export default {
  Pagination,
  PaginationPager,
  PaginationGoto,
  install
}
