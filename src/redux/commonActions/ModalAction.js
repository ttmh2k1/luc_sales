export const modalTypes = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL'
  };
  
  export function showModal(payload) {
    return {
      type: modalTypes.SHOW_MODAL,
      payload
    };
  }
  
  export function hideModal(payload) {
    return {
      type: modalTypes.HIDE_MODAL,
      payload
    };
  }
  