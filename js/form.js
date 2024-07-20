document.addEventListener('DOMContentLoaded', function() {
    const ids = [
        'phoneInput',
        'nameInput',
        'messageInput',
        'sphereInput',
        'siteInput',
        'commentInput'
    ];
    ids.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('mouseover', function() {
                this.setAttribute('data-placeholder', this.placeholder);
                this.placeholder = ''; // Очищаем placeholder
            });
            input.addEventListener('mouseout', function() {
                this.placeholder = this.getAttribute('data-placeholder');
            });
        }
    });
});