export function openModal(modal) {
    return {
        type: 'OPEN_MODAL',
        modal,
    }
}
export function closeModal() {
    return {
        type: 'CLOSE_MODAL',
    }
}