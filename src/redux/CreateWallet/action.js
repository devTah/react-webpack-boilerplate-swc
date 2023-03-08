import { SystemCore } from '../../core';
import createAction from '../action';

export const CreateWalletActionTypes = Object.freeze({
  GET_AUTO_GEN_LIST: 'GET_AUTO_GEN_LIST',
  GET_AUTO_GEN_LIST_SUCCESS: 'GET_AUTO_GEN_LIST_SUCCESS',
  GET_AUTO_GEN_LIST_FAIL: 'GET_AUTO_GEN_LIST_FAIL',
  GET_LIST_CONFIRM: 'GET_LIST_CONFIRM',
  GET_LIST_CONFIRM_SUCCESS: 'GET_LIST_CONFIRM_SUCCESS',
  GET_LIST_CONFIRM_FAIL: 'GET_LIST_CONFIRM_FAIL',
  CREATE_WALLET: 'CREATE_WALLET',
  CREATE_WALLET_SUCCESS: 'CREATE_WALLET_SUCCESS',
  CREATE_WALLET_FAIL: 'CREATE_WALLET_FAIL',
  RESET_STATE: 'RESET_STATE',
  RESET_STATUS_CREATE_WALLET: 'RESET_STATUS_CREATE_WALLET',
  CLEAR_RAW_SEED_CONFIRM: 'CLEAR_RAW_SEED_CONFIRM',
});

export function getAutoGenListOriginal(dispatch) {
  dispatch({ type: CreateWalletActionTypes.GET_AUTO_GEN_LIST });
  SystemCore.send({
    command: 'get-raw-seed',
  })
    .then((res) => {
      dispatch({
        type: CreateWalletActionTypes.GET_AUTO_GEN_LIST_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CreateWalletActionTypes.GET_AUTO_GEN_LIST_FAIL,
        payload: err,
      });
    });
}

export function getAutoGenListConfirm(dispatch) {
  dispatch({ type: CreateWalletActionTypes.GET_LIST_CONFIRM });
  SystemCore.send({
    command: 'get-seed-phrase-confirm',
  })
    .then((res) => {
      dispatch({
        type: CreateWalletActionTypes.GET_LIST_CONFIRM_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CreateWalletActionTypes.GET_LIST_CONFIRM_FAIL,
        payload: err,
      });
    });
}

export function clearSeedPhraseConfirm(dispatch) {
  dispatch({ type: CreateWalletActionTypes.CLEAR_RAW_SEED_CONFIRM });
}

export const createWallet = (value) => async (dispatch) => {
  dispatch({ type: CreateWalletActionTypes.CREATE_WALLET });
  return SystemCore.send({
    command: 'create-wallet',
    value: value.isCustom
      ? value.customData
      : {
          'raw-seed-confirm-selected': value,
        },
  })
    .then((res) => {
      dispatch({
        type: CreateWalletActionTypes.CREATE_WALLET_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CreateWalletActionTypes.CREATE_WALLET_FAIL,
        payload: err,
      });
    });
};

const setAutoGenConfirmFail = (value) => async (dispatch) => {
  dispatch(
    createAction(CreateWalletActionTypes.SET_AUTO_GEN_CONFIRM_FAIL, value),
  );
  return;
};

export const submitAutoGenListConfirm =
  (autoGenList, callback) => async (dispatch) => {
    const result = (Math.random() * 100).toString().substring(0, 2);
    const isErrorConfirm = result % 2 === 0;

    setTimeout(() => {
      if (isErrorConfirm) {
        dispatch(setAutoGenConfirmFail(true));
        callback?.();
        return;
      }
      dispatch(setAutoGenConfirmFail(false));
      callback?.('success');
    }, 1000);

    // call deriver
    // SystemCore.send('confirm-seedPhrase', {
    //   payload: autoGenList,
    // });
    return;
  };

export const resetState = (callback) => async (dispatch) => {
  dispatch(createAction(CreateWalletActionTypes.RESET_STATE));
  callback?.();
  return;
};

export const resetStatusCreateWallet = (callback) => async (dispatch) => {
  dispatch(createAction(CreateWalletActionTypes.RESET_STATUS_CREATE_WALLET));
  callback?.();
  return;
};
