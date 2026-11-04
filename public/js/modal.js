// Modal Manager
const Modal = {
    create(id, content) {
        const old = document.getElementById(id);
        if (old) old.remove();

        const html = `
            <div id="${id}" class="custom-modal hidden">
                <div class="custom-modal-content" role="dialog" aria-modal="true">
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
        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            modal.firstElementChild.classList.add('scale-100');
        });
    },

    close(id) {
        const modal = document.getElementById(id);
        if (!modal) return;

        modal.firstElementChild.classList.remove('scale-100');

        setTimeout(() => {
            modal.remove();
            // Chỉ mở khóa cuộn khi không còn modal nào
            if (!document.querySelector('.custom-modal')) {
                document.body.style.overflow = '';
            }
        }, 200);
    }
};
