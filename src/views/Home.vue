<template>
  <div class="home">
    <div class="index">

      <el-row :gutter="20">

        <el-col :span="4" v-for="video in videos" :key="video.id">
          <el-card style="margin: 5px">
          <img src="../assets/logo.png" class="image">
          <div>
            <div class="video-title">{{video.title}}</div>

            <div class="bottom clearfix">
              <span class="video-info">{{video.info}}</span>
            </div>
          </div>
        </el-card>
        </el-col>

      </el-row>

<!--      <el-card :body-style="{ padding: '0px' }">-->
<!--        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
<!--        <div>-->
<!--          <span>title</span>-->
<!--          <div class="bottom clearfix">-->
<!--            <span>info</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-card>-->

    </div>
  </div>
</template>

<script>

import * as API from '@/api/video/';

export default {
  name: 'home',

  components: {
  },
  data() {
    return {
      videos: [],
    }
  },

  methods: {
    load() {
      API.getVideos().then((res => {
        this.videos = res.data;
      }));
    },
  },

  beforeMount() {
    this.load();
  },

}
</script>

<style>
  .image {
    width: 100%;
  }
  .video-title {
    margin-top: 3px;
    overflow: hidden;     /*设置超出的部分进行影藏*/
    text-overflow: ellipsis;     /*设置超出部分使用省略号*/
    white-space:nowrap ;    /*设置为单行*/

  }
  .bottom {
    margin-top: 3px;
  }
  .video-info {
    color: #909399;
  }
</style>
