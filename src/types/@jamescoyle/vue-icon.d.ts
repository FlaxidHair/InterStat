declare module '@jamescoyle/vue-icon' {
  import Vue, { VueConstructor } from 'vue'

  export default class SvgIcon extends Vue {
    // Declare the props and other properties of the SvgIcon component
    public name: string
    public width: string
    public height: string
    public fill: string
  }

  export const SvgIcon: VueConstructor<SvgIcon>
}
