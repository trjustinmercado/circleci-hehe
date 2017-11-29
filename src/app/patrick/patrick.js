
class PatrickController {
  /** @ngInject */
  constructor() {
    const vm = this;
    vm.onScreenText = 'Is this the Krusty Krab?';
    vm.hasPink = false;
    vm.onClickScreen = () => {
      if (vm.hasPink) {
        vm.onScreenText = 'Is this the Krusty Krab?';
      } else {
        vm.onScreenText = 'No Thiss is Patrick';
      }
      vm.hasPink = !vm.hasPink;
    };
  }
}
export const patrick = {
  template: require('./patrick.html'),
  controller: PatrickController
};
