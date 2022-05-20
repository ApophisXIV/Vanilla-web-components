function show_modal(modal) {
    const modal_template = `
    <div class="modal-custom" id="${modal.id}">
        <div class="modal-custom-dialog ${modal.type}">
            <div class="icon-box">
                <i class="${modal.icon}"></i>
            </div>
            <div class="modal-custom-content">
                <div class="modal-custom-header"></div>
                <div class="modal-custom-body">
                    <h2>${modal.title}</h2>
                    ${modal.body}
                </div>
                <div class="modal-custom-footer">
                    ${modal.buttons.map(button => {
                        return `
                        <button type="button" class="btn-modal ${button.type}" id="${button.id}" onclick="${button.action}">
                            ${button.text}
                        </button>`
                    }).join('')}
                    <button type="button" class="btn-modal" onclick="document.getElementById('${modal.id}').remove()">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
    document.body.insertAdjacentHTML('beforeend', modal_template)

    return document.getElementById(modal.id)
}

function modal_new_entry() {
    const modal_new_entry = `
        <div class="modal fade" id="modal_new_entry" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Nuevo material</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="form_new_entry">
                            <div class="form-group">
                                <label for="new_entry_name">Nombre</label>
                                <input type="text" autocomplete="off" class="form-control" id="new_entry_name"
                                    placeholder="Nombre del material">
                            </div>
                            <div class="form-group">
                                <label for="new_entry_description">Descripción</label>
                                <input type="text" autocomplete="off" class="form-control" id="new_entry_description"
                                    placeholder="Descripción del material">
                            </div>
                            <div class="form-group">
                                <label for="new_entry_link">Link</label>
                                <input type="text" autocomplete="off" class="form-control" id="new_entry_link"
                                    placeholder="Link del material">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-outline-success" id="confirm_new_entry_button"
                            data-bs-dismiss="modal">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

export { show_modal }