<template>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {

  a {
    font-weight: bold;
    color: gray;

    &.router-link-exact-active {
      color: white;
      position: relative;
      background-color: orangered;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      top: -1.5rem;
      outline-color: rgba(5, 5, 5, 0.8);
      outline-width: 0.8rem;
      outline-style: solid;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
