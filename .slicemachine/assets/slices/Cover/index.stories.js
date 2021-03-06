import MyComponent from '../../../../slices/Cover';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Cover'
}


export const _Full = () => ({
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
      mock: {"variation":"full","name":"Full","slice_type":"cover","items":[{"ctaLabel":"monetize magnetic partnerships","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Outline"},{"ctaLabel":"innovate holistic e-commerce","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"},{"ctaLabel":"disintermediate wireless e-markets","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=2000&h=1000&fit=crop"},"tagline":"matrix virtual relationships","title":[{"type":"heading2","text":"Enhance virtual deliverables","spans":[]}],"text":[{"type":"paragraph","text":"Sunt eu occaecat tempor cupidatat quis laboris ipsum culpa quis cupidatat occaecat. Et sunt irure dolore excepteur eu minim culpa duis est ea incididunt et laboris.","spans":[]}],"top":true},"id":"_Full"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Full.storyName = 'Full'

export const _Contained = () => ({
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
      mock: {"variation":"contained","name":"Contained","slice_type":"cover","items":[{"ctaLabel":"extend frictionless portals","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"},{"ctaLabel":"disintermediate strategic communities","ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaStyle":"Filled"},{"ctaLabel":"visualize synergistic eyeballs","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Outline"},{"ctaLabel":"optimize e-business methodologies","ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=2000&h=1000&fit=crop"},"tagline":"streamline granular web services","title":[{"type":"heading2","text":"Iterate leading-edge content","spans":[]}],"text":[{"type":"paragraph","text":"Veniam reprehenderit tempor fugiat adipisicing sint aliqua dolor cillum Lorem mollit est. Officia eu nisi esse Lorem officia laborum aute qui dolore veniam.","spans":[]}],"top":false},"id":"_Contained"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Contained.storyName = 'Contained'

export const _FullSecondary = () => ({
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
      mock: {"variation":"fullSecondary","name":"Full / Secondary colors","slice_type":"cover","items":[{"ctaLabel":"reinvent web-enabled portals","ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaStyle":"Outline"},{"ctaLabel":"enable scalable eyeballs","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Filled"},{"ctaLabel":"reinvent leading-edge e-markets","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=2000&h=1000&fit=crop"},"tagline":"cultivate enterprise communities","title":[{"type":"heading2","text":"Evolve B2B experiences","spans":[]}],"text":[{"type":"paragraph","text":"Id labore exercitation sunt ea labore aliqua aliquip est. Do cupidatat sunt elit ex velit elit duis nostrud ullamco sunt ullamco voluptate dolore in aute.","spans":[]}],"top":true},"id":"_FullSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullSecondary.storyName = 'Full / Secondary colors'

export const _ContainedSecondary = () => ({
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
      mock: {"variation":"containedSecondary","name":"Contained / Secondary colors","slice_type":"cover","items":[{"ctaLabel":"reinvent plug-and-play infomediaries","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Filled"},{"ctaLabel":"synthesize sticky paradigms","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Filled"},{"ctaLabel":"redefine revolutionary vortals","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Outline"},{"ctaLabel":"productize dynamic experiences","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Filled"},{"ctaLabel":"revolutionize seamless applications","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=2000&h=1000&fit=crop"},"tagline":"benchmark virtual e-business","title":[{"type":"heading2","text":"Exploit visionary convergence","spans":[]}],"text":[{"type":"paragraph","text":"Proident non sint aliquip dolor Lorem reprehenderit et nisi in aliqua.","spans":[]}],"top":true},"id":"_ContainedSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ContainedSecondary.storyName = 'Contained / Secondary colors'
