import Pagination from './Pagination.vue'
import PaginationPager from './PaginationPager.vue'

function install(Vue) {
  Vue.component(Pagination.name, Pagination)
  Vue.component(PaginationPager.name, PaginationPager)
}

export default {Pagination, PaginationPager, install}
