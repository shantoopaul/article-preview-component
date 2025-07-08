const shareBtn = document.querySelector('.share-btn');
const modal = document.querySelector('.modal');

shareBtn.addEventListener('click', () => {
	const isExpanded = shareBtn.getAttribute('aria-expanded') === 'true';

	if (!isExpanded) {
		modal.classList.remove('hidden');
		modal.setAttribute('aria-hidden', 'false');
		shareBtn.setAttribute('aria-expanded', 'true');
		shareBtn.classList.add('active');
	} else {
		modal.classList.add('hidden');
		modal.setAttribute('aria-hidden', 'true');
		shareBtn.setAttribute('aria-expanded', 'false');
		shareBtn.classList.remove('active');
	}
});
