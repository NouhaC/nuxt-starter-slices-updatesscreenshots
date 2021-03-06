import MyComponent from '../../../../slices/Features';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Features'
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
      mock: {"variation":"left","name":"Left aligned","slice_type":"features","items":[{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Redefine next-generation e-tailers","spans":[]}],"text":[{"type":"paragraph","text":"Eiusmod non proident deserunt ut officia culpa esse culpa do. Sint ad aliqua dolor sunt eiusmod. Do pariatur nulla Lorem do.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"revolutionize extensible mindshare"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Reinvent B2B metrics","spans":[]}],"text":[{"type":"paragraph","text":"Consectetur enim esse fugiat occaecat.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"implement bricks-and-clicks communities"}],"primary":{"tagline":"unleash one-to-one ROI","title":[{"type":"heading2","text":"Deliver sticky ROI","spans":[]}],"text":[{"type":"paragraph","text":"Consectetur elit aliqua Lorem anim aliquip sunt magna excepteur sit quis pariatur officia ea nisi laboris.","spans":[]}]},"id":"_Left"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Left.storyName = 'Left aligned'

export const _Centered = () => ({
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
      mock: {"variation":"centered","name":"Centered","slice_type":"features","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Syndicate B2B synergies","spans":[]}],"text":[{"type":"paragraph","text":"Ullamco eiusmod ea cupidatat enim amet et cillum officia aliquip consectetur incididunt qui pariatur.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"envisioneer one-to-one ROI"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Benchmark user-centric e-business","spans":[]}],"text":[{"type":"paragraph","text":"Dolore fugiat ullamco occaecat exercitation ut velit id ex culpa. Nulla incididunt non nostrud reprehenderit incididunt deserunt officia qui in cillum ullamco deserunt fugiat. Ea ad et Lorem cillum aliqua velit.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"evolve compelling metrics"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Drive leading-edge web-readiness","spans":[]}],"text":[{"type":"paragraph","text":"Non laborum anim tempor ea. Fugiat labore dolore mollit consectetur nisi irure velit adipisicing aliqua eiusmod Lorem id. Aute commodo veniam ullamco eu pariatur voluptate ut sunt reprehenderit sint proident voluptate adipisicing tempor.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"whiteboard robust e-commerce"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Mesh integrated partnerships","spans":[]}],"text":[{"type":"paragraph","text":"Enim anim excepteur mollit pariatur dolore excepteur deserunt officia elit in id excepteur consectetur ad. Aute velit amet elit magna nisi cillum consequat consectetur consequat ex.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"matrix user-centric vortals"}],"primary":{"tagline":"leverage robust architectures","title":[{"type":"heading2","text":"Brand extensible communities","spans":[]}],"text":[{"type":"paragraph","text":"Proident eiusmod nisi in nisi dolor aliqua exercitation nisi laboris irure minim cillum nisi reprehenderit proident.","spans":[]}]},"id":"_Centered"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Centered.storyName = 'Centered'

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
      mock: {"variation":"leftSecondary","name":"Left aligned / Secondary","slice_type":"features","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Engage killer schemas","spans":[]}],"text":[{"type":"paragraph","text":"Consequat eu voluptate nostrud eiusmod minim voluptate ut cupidatat incididunt adipisicing dolor.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"leverage mission-critical infomediaries"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Optimize proactive synergies","spans":[]}],"text":[{"type":"paragraph","text":"Cillum pariatur nisi non in nulla tempor nostrud esse nisi eiusmod ea esse eiusmod. Mollit nisi nisi sunt veniam cupidatat in ut dolore id Lorem. Incididunt consectetur veniam irure et tempor.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"strategize visionary deliverables"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Whiteboard proactive experiences","spans":[]}],"text":[{"type":"paragraph","text":"Id ut ullamco pariatur.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"benchmark innovative convergence"}],"primary":{"tagline":"transform distributed convergence","title":[{"type":"heading2","text":"Drive one-to-one e-business","spans":[]}],"text":[{"type":"paragraph","text":"Anim duis incididunt tempor ex deserunt quis enim veniam dolor ullamco incididunt. Mollit nulla quis deserunt Lorem cillum Lorem adipisicing sunt. Tempor do mollit officia nisi laborum laborum.","spans":[]}]},"id":"_LeftSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftSecondary.storyName = 'Left aligned / Secondary'

export const _CenteredSecondary = () => ({
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
      mock: {"variation":"centeredSecondary","name":"Center / Secondary","slice_type":"features","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Deploy frictionless convergence","spans":[]}],"text":[{"type":"paragraph","text":"Occaecat ullamco aute adipisicing eiusmod consequat dolor est adipisicing. Ea nisi officia duis eiusmod nisi enim sint officia occaecat aute culpa est deserunt dolore fugiat.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"aggregate one-to-one e-tailers"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Evolve real-time vortals","spans":[]}],"text":[{"type":"paragraph","text":"Reprehenderit amet dolor ullamco sunt fugiat laboris consectetur nulla voluptate sint id do ex laboris commodo. Voluptate qui in ex officia pariatur occaecat labore anim eu aliqua labore tempor. Voluptate aliquip incididunt amet sunt in irure nisi aliquip occaecat excepteur.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"scale enterprise vortals"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Harness real-time blockchains","spans":[]}],"text":[{"type":"paragraph","text":"Est irure aute id pariatur id ullamco velit eu laboris. Fugiat enim minim aute eu officia exercitation irure sunt elit tempor fugiat commodo laborum commodo. Exercitation irure esse do incididunt proident deserunt qui anim irure anim.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"target leading-edge e-business"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Scale rich e-commerce","spans":[]}],"text":[{"type":"paragraph","text":"Enim laborum magna reprehenderit. Mollit incididunt consectetur do esse elit deserunt cillum ut ut laboris ad et culpa. Ullamco sunt exercitation ipsum labore eiusmod labore tempor.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"engage user-centric mindshare"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Visualize turn-key web services","spans":[]}],"text":[{"type":"paragraph","text":"Id culpa Lorem ea dolor esse id fugiat aute pariatur proident. Ad enim ullamco enim eiusmod anim magna qui aute. Fugiat deserunt nisi sit ipsum fugiat aute labore.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"integrate mission-critical web services"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Brand customized web-readiness","spans":[]}],"text":[{"type":"paragraph","text":"Amet est ut reprehenderit dolore nostrud magna dolore.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"cultivate value-added convergence"}],"primary":{"tagline":"exploit extensible schemas","title":[{"type":"heading2","text":"Empower ubiquitous users","spans":[]}],"text":[{"type":"paragraph","text":"Proident consectetur commodo sint non consectetur.","spans":[]}]},"id":"_CenteredSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CenteredSecondary.storyName = 'Center / Secondary'
