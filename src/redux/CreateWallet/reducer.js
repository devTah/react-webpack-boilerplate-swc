import { CreateWalletActionTypes } from './action';

const initState = {
  listSeedPhrase: [],
  listSeedPhraseConfirm: [],
  errorGetSeedPhrase: '',
  errorGetSeedPhraseConfirm: '',
  statusGetSeedPharseAuto: 0,
  statusGetSeedPhareConfirm: 0,
  walletCreated: {},
  statusCreateWallet: -1,
  errorCreateWallet: '',
};

export default function createWalletReducer(state = initState, action) {
  switch (action.type) {
    case CreateWalletActionTypes.CLEAR_RAW_SEED_CONFIRM:
      return {
        ...state,
        listSeedPhraseConfirm: [],
      };
    case CreateWalletActionTypes.GET_AUTO_GEN_LIST:
      return {
        ...state,
        statusGetSeedPharseAuto: 0,
        errorGetSeedPhrase: '',
      };
    case CreateWalletActionTypes.GET_AUTO_GEN_LIST_SUCCESS:
      return {
        ...state,
        listSeedPhrase: [...action.payload.data],
        statusGetSeedPharseAuto: 1,
      };
    case CreateWalletActionTypes.GET_AUTO_GEN_LIST_FAIL:
      return {
        ...state,
        statusGetSeedPharseAuto: 2,
        errorGetSeedPhrase: action.payload,
      };
    case CreateWalletActionTypes.GET_LIST_CONFIRM:
      return {
        ...state,
        statusGetSeedPhareConfirm: 0,
        errorGetSeedPhraseConfirm: '',
      };
    case CreateWalletActionTypes.GET_LIST_CONFIRM_SUCCESS:
      return {
        ...state,
        listSeedPhraseConfirm: action.payload.data,
        statusGetSeedPhareConfirm: 1,
      };
    case CreateWalletActionTypes.GET_LIST_CONFIRM_FAIL:
      return {
        ...state,
        statusGetSeedPhareConfirm: 2,
        errorGetSeedPhraseConfirm: action.payload,
      };
    case CreateWalletActionTypes.CREATE_WALLET:
      return {
        ...state,
        statusCreateWallet: 0,
        errorCreateWallet: '',
        walletCreated: {},
      };
    case CreateWalletActionTypes.CREATE_WALLET_SUCCESS:
      return {
        ...state,
        walletCreated: { ...action.payload },
        statusCreateWallet: 1,
      };
    case CreateWalletActionTypes.CREATE_WALLET_FAIL:
      return {
        ...state,
        statusCreateWallet: 2,
        errorCreateWallet: action.payload,
      };
    // case CreateWalletActionTypes.SET_AUTO_GEN_LIST_CONFIRM:
    //   return {
    //     ...state,
    //     seedPhraseConfirm: {
    //       ...state.seedPhraseConfirm,
    //       listSeedPhraseConfirm: action.payload.data,
    //     },
    //   };

    // case CreateWalletActionTypes.SET_AUTO_GEN_CONFIRM_FAIL:
    //   return {
    //     ...state,
    //     seedPhraseConfirm: {
    //       ...state.seedPhraseConfirm,
    //       isErrorConfirm: action.payload,
    //     },
    //   };

    case CreateWalletActionTypes.RESET_STATE:
      return {
        ...state,
        listSeedPhrase: [],
        seedPhraseConfirm: {
          listSeedPhraseConfirm: [],
          isErrorConfirm: false,
        },
      };
    case CreateWalletActionTypes.RESET_STATUS_CREATE_WALLET:
      return {
        ...state,
        walletCreated: {},
        statusCreateWallet: -1,
      };
    default:
      return { ...state };
  }
}
