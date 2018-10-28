<template lang="pug">
.box
  article.media
    .media-left
      figure.image.is-64x64
        img(:src='imgSource', alt='Image')
    .media-content
      .content
        p
          strong {{ name }}
          | {{ description }}
      nav.level.is-mobile
        .level-left
          button.button(@click="$emit('selected', campaignId)") Select
</template>

<script>
export default {
  name: 'Campaign',
  props: {
    imgSource: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    createdAt: {
      type: String
    },
    campaignId: {
      type: Number
    }
  }
}
</script>
