<template>
    <el-menu class="top-bar" mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/submit">投稿</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'NavBar',

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-bar {
    margin-bottom: 10px;

}
</style>
