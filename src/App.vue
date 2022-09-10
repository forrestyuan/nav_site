<template>
  <router-view />
</template>

<style lang="less">
html,
body {
  background-color: #eee;
}

a {
  text-decoration: none !important;
  color: #444;

  &:hover {
    cursor: pointer;
    color: #1890ff !important;
  }
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
form,
input,
textarea,
p,
th,
td {
  margin: 0;
  padding: 0;
}

ol,
ul,
dl {
  list-style: none;
}
</style>
