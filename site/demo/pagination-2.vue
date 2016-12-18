<template>
<div>
<du-pagination :total="368">
  <du-pagination-pager prev next></du-pagination-pager>
  <du-pagination-goto></du-pagination-goto>
</du-pagination>
<du-pagination :page="2" :total="368">
  <du-pagination-pager prev next></du-pagination-pager>
  <du-pagination-goto label="跳转"></du-pagination-goto>
</du-pagination>
<du-pagination :page="3" :total="368">
  <du-pagination-pager prev next></du-pagination-pager>
  <du-pagination-goto>Jump</du-pagination-goto>
</du-pagination>
</div>
</template>
