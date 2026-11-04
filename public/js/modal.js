// Modal Manager
const Modal = {
    create(id, content) {
        const html = `
            <div id="${id}" class="custom-modal hidden">
                <div class="custom-modal-content">
                    ${content}
                </div>
            </div>
        `;
        document.getElementById('modalsContainer')
            .insertAdjacentHTML('beforeend', html);
    },

    open(id) {
        const modal = document.getElementById(id);
        if (!modal) return;

        modal.classList.remove('hidden');

        setTimeout(() => {
            const content = modal.querySelector('.custom-modal-content');
            content.classList.remove('scale-0', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        }, 10);
    },

    close(id) {
        const modal = document.getElementById(id);
        if (!modal) return;

        const content = modal.querySelector('.custom-modal-content');

        content.classList.remove('scale-100', 'opacity-100');
        content.classList.add('scale-0', 'opacity-0');

        setTimeout(() => modal.remove(), 200);
    }
};
