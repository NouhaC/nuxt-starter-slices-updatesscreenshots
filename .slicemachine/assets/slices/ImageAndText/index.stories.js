import MyComponent from '../../../../slices/ImageAndText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageAndText'
}


export const _Left = () => ({
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
      mock: {"variation":"left","name":"Left aligned","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=1000&h=1000&fit=crop"},"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"tagline":"whiteboard vertical e-services","title":[{"type":"heading2","text":"Expedite one-to-one e-markets","spans":[]}],"text":[{"type":"paragraph","text":"Adipisicing qui adipisicing nisi laborum ea esse sit dolore adipisicing occaecat.","spans":[]}],"ctaLabel":"generate granular web services","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"top":true},"id":"_Left"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Left.storyName = 'Left aligned'

export const _Right = () => ({
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
      mock: {"variation":"right","name":"Right aligned","slice_type":"image_and_text","items":[],"primary":{"tagline":"extend transparent models","title":[{"type":"heading2","text":"Aggregate extensible relationships","spans":[]}],"text":[{"type":"paragraph","text":"Consectetur mollit minim mollit occaecat.","spans":[]}],"ctaLabel":"redefine e-business platforms","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=1000&h=1000&fit=crop"},"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"top":false},"id":"_Right"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Right.storyName = 'Right aligned'

export const _LeftFull = () => ({
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
      mock: {"variation":"leftFull","name":"Left aligned / Full width","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=1000&h=1000&fit=crop"},"tagline":"recontextualize out-of-the-box ROI","title":[{"type":"heading2","text":"Streamline bricks-and-clicks users","spans":[]}],"text":[{"type":"paragraph","text":"Anim et et reprehenderit laborum laboris culpa. Anim ullamco ut minim laboris.","spans":[]}],"ctaLabel":"deploy B2C partnerships","ctaLink":{"link_type":"Web","url":"http://google.com"},"top":false},"id":"_LeftFull"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftFull.storyName = 'Left aligned / Full width'

export const _RightFull = () => ({
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
      mock: {"variation":"rightFull","name":"Right aligned / Full width","slice_type":"image_and_text","items":[],"primary":{"tagline":"repurpose collaborative relationships","title":[{"type":"heading2","text":"Productize leading-edge ROI","spans":[]}],"text":[{"type":"paragraph","text":"Laborum magna veniam est exercitation sunt sunt irure consectetur do deserunt aute. Anim voluptate laborum irure commodo ut est. Cillum laboris nisi sunt excepteur amet ea Lorem voluptate ex sint velit fugiat adipisicing.","spans":[]}],"ctaLabel":"implement 24/365 synergies","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=1000&h=1000&fit=crop"},"top":false},"id":"_RightFull"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RightFull.storyName = 'Right aligned / Full width'

export const _LeftSecondary = () => ({
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
      mock: {"variation":"leftSecondary","name":"Left aligned / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=1000&h=1000&fit=crop"},"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"tagline":"streamline frictionless vortals","title":[{"type":"heading2","text":"Iterate cutting-edge architectures","spans":[]}],"text":[{"type":"paragraph","text":"Mollit pariatur Lorem dolore ex incididunt est laborum ipsum tempor reprehenderit nostrud consequat est. Tempor enim qui labore sint magna ad irure irure.","spans":[]}],"ctaLabel":"implement back-end functionalities","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"top":false},"id":"_LeftSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftSecondary.storyName = 'Left aligned / Secondary colors'

export const _RightSecondary = () => ({
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
      mock: {"variation":"rightSecondary","name":"Right aligned / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"tagline":"incentivize intuitive web-readiness","title":[{"type":"heading2","text":"Iterate 24/7 experiences","spans":[]}],"text":[{"type":"paragraph","text":"Sit incididunt consectetur ut ipsum cupidatat sunt. Nostrud ea fugiat consequat occaecat enim proident.","spans":[]}],"ctaLabel":"revolutionize bleeding-edge content","ctaLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=1000&h=1000&fit=crop"},"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"top":false},"id":"_RightSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RightSecondary.storyName = 'Right aligned / Secondary colors'

export const _LeftFullSecondary = () => ({
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
      mock: {"variation":"leftFullSecondary","name":"Left aligned / Full width / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=1000&h=1000&fit=crop"},"tagline":"engineer efficient users","title":[{"type":"heading2","text":"Recontextualize out-of-the-box platforms","spans":[]}],"text":[{"type":"paragraph","text":"Ea Lorem fugiat tempor dolor incididunt reprehenderit velit nostrud laboris adipisicing consequat. Excepteur dolor deserunt id laboris mollit nisi. Consectetur ea adipisicing irure Lorem.","spans":[]}],"ctaLabel":"visualize bricks-and-clicks vortals","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"top":false},"id":"_LeftFullSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftFullSecondary.storyName = 'Left aligned / Full width / Secondary colors'

export const _RightFullSecondary = () => ({
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
      mock: {"variation":"rightFullSecondary","name":"Right aligned / Full width / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"tagline":"utilize extensible technologies","title":[{"type":"heading2","text":"Target web-enabled vortals","spans":[]}],"text":[{"type":"paragraph","text":"Eu nostrud consequat nisi aute consequat sunt reprehenderit incididunt reprehenderit laboris mollit nisi aute ullamco esse. Pariatur exercitation nisi elit eu. Non pariatur in proident velit duis elit labore ad do ea qui incididunt adipisicing.","spans":[]}],"ctaLabel":"facilitate dot-com users","ctaLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=1000&h=1000&fit=crop"},"top":true},"id":"_RightFullSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RightFullSecondary.storyName = 'Right aligned / Full width / Secondary colors'
