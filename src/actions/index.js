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

export function setTariffs(tariffs) {
    return {
        type: "SET_TARIFFS",
        tariffs,
    }
}

export function addTariff(tariff) {
    return {
        type: "ADD_TARIFF",
        tariff,
    }
}