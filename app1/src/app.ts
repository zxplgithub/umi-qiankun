export const qiankun = {
  // before bootstrap
  async bootstrap(props: any) {
    console.log('app1 bootstrap', props);
  },
  // before render
  async mount(props: any) {
    console.log('app1 mount', props);
  },
  // after ummount
  async unmount(props: any) {
    console.log('app1 unmount', props);
  },
};
