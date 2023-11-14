import Vue from 'vue';
import Vuex from 'vuex';

import d2admin from './modules/d2admin';

Vue.use(Vuex);
export const storeMutations = {
  log_clean: 'd2admin/log/clean',
  menu_asideSet: 'd2admin/menu/asideSet',
  page_keepAliveRemove: 'd2admin/page/keepAliveRemove',
  page_keepAlivePush: 'd2admin/page/keepAlivePush',
  page_keepAliveClean: 'd2admin/page/keepAliveClean',
  page_currentSet: 'd2admin/page/currentSet',
  permissions_setPerms: 'd2admin/permissions/setPerms',
  systemVar_update: 'd2admin/systemVar/update',
  clear_cloudConfig: 'd2admin/profile/clearCloudConfig'
};

export const storeActions = {
  account_login: 'd2admin/account/login',
  account_logout: 'd2admin/account/logout',
  account_loadsync: 'd2admin/account/loadsync',
  log_add: 'd2admin/log/add',
  menu_asideCollapseSet: 'd2admin/menu/asideCollapseSet',
  menu_asideCollapseToggle: 'd2admin/menu/asideCollapseToggle',
  menu_asideCollapseLoad: 'd2admin/menu/asideCollapseLoad',
  permissions_reqPerms: 'd2admin/permissions/reqPerms',
  permissions_filterByPerms: 'd2admin/permissions/filterByPerms',
  user_set: 'd2admin/user/set',
  user_load: 'd2admin/user/load',
  profile_set: 'd2admin/profile/set',
  profile_setSelectMerchant: 'd2admin/profile/setSelectMerchant',
  profile_load: 'd2admin/profile/load',
  profile_loadsync: 'd2admin/profile/loadsync',
  profile_initLanguageByByUrl: 'd2admin/profile/initLanguageByByUrl',
  serverConfig_set: 'd2admin/serverConfig/set',
  serverConfig_setMerchant: 'd2admin/serverConfig/setMerchant',
  serverConfig_loadsync: 'd2admin/serverConfig/loadsync',
};

export const storeGetters = {
  log_length: 'd2admin/log/length',
  log_lengthError: 'd2admin/log/lengthError',
  menu_aside: 'd2admin/menu/aside',
  permissions_permConfig: 'd2admin/permissions/permConfig',
  account_merchantConfig: 'd2admin/account/merchantConfig',
  profile_lauguage: 'd2admin/profile/language',
  profile_selectMerchant: 'd2admin/profile/selectMerchant'
};

export default new Vuex.Store({
  modules: {
    d2admin
  },
  // strict: process.env.VUE_APP_ENV !== 'prod'
});

// export function createStoreMap() {
//   if(d2admin && d2admin.modules) {
//     Object.keys(d2admin.modules).forEach( key => {
//       let actions = d2admin.modules[key].actions
//       if(actions) {
//         Object.keys(actions).forEach( action => {
//           storeActions[key + '_' + action] = 'd2admin\/' + key + '\/' + action
//         })
//       }
//       let mutations = d2admin.modules[key].mutations;
//       if(mutations) {
//         Object.keys(mutations).forEach(mutation => {
//           storeMutations[key + '_' + mutation] = 'd2admin\/' + key + '\/' + mutation
//         })
//       }
//       let getters = d2admin.modules[key].getters;
//       if(getters) {
//         Object.keys(getters).forEach(getter => {
//           storeGetters[key + '_' + getter] = 'd2admin\/' + key + '\/' + getter
//         })
//       }
//     })
//   }

//   Object.keys(storeActions).forEach(key => {
//     console.log(key + ': \'' + storeActions[key] + '\',')
//   })
//   console.log("---------------------------")
//   Object.keys(storeMutations).forEach(key => {
//     console.log(key + ': \'' + storeMutations[key] + '\',')
//   })

//   console.log("---------------------------")
//   Object.keys(storeGetters).forEach(key => {
//     console.log(key + ': \'' + storeGetters[key] + '\',')
//   })
// }

// createStoreMap()