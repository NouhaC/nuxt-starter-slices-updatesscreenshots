import MyComponent from '../../../../slices/Logos';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Logos'
}


export const _Stacked = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"stacked","name":"Stacked","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"tagline":"strategize vertical e-markets","title":[{"type":"heading2","text":"Synthesize end-to-end e-tailers","spans":[]}]},"id":"_Stacked"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Stacked.storyName = 'Stacked'

export const _Carousel = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"carousel","name":"Carousel","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"tagline":"enhance strategic action-items","title":[{"type":"heading2","text":"Revolutionize world-class methodologies","spans":[]}]},"id":"_Carousel"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Carousel.storyName = 'Carousel'

export const _StackedSecondary = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"stackedSecondary","name":"Stacked / Secondary colors","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"tagline":"e-enable sexy ROI","title":[{"type":"heading2","text":"Transition innovative paradigms","spans":[]}]},"id":"_StackedSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_StackedSecondary.storyName = 'Stacked / Secondary colors'

export const _CarouselSecondary = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"carouselSecondary","name":"Carousel / Secondary colors","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"tagline":"evolve user-centric platforms","title":[{"type":"heading2","text":"Repurpose compelling solutions","spans":[]}]},"id":"_CarouselSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CarouselSecondary.storyName = 'Carousel / Secondary colors'
