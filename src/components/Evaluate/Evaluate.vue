<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        name: "Evaluate",
        props: {
          items:{
            // type:String,
            // default:[],
            default: function () {
              return  [
                { header: '评论' },
                {
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                  title: 'Brunch this weekend?',
                  subtitle: "<span class='text--primary'>Ali Connors</span> ekend. Do you want to hang out?"
                },
                { divider: true, inset: true },
                {
                  avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                  title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                  subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
                },
              ]
            },
          },
        },
    }
</script>

<style scoped>

</style>
