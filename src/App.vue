<template>
  <div id="app">
    <div id="nav">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>社員管理システム</h1>
      <br/>
      <router-link to="/">ダッシュボード</router-link>
      <router-link to="/about">説明</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

  #nav {
    padding: 30px;
    background: #83e8f5;
  }

  #nav a {
    font-weight: bold;
    color: #fff;
    margin: 0 50px;
    border: 1px solid #000;
    padding: 10px 50px;
    border-radius: 50px;
    background: #000;
  }

  #nav a.router-link-exact-active {
    color: #fce301;
    text-decoration: none;
  }

  #nav a:hover {
    font-weight: bold;
    color: #000;
    margin: 0 50px;
    border: 1px solid #000;
    padding: 10px 50px;
    border-radius: 50px;
    background: #fff;
    text-decoration: none;
  }
</style>
