(() => {
    const badguys = [
        '.header-unit-wrapper',
        '.combo-wrapper',
        '.newsfeed-combo-spacer',
        '.jquery-modal.blocker.current',
        '#ctoolbar',
        '.ntvClickOut',
        '.facebook_comments',
        '.floating-bar.floating-fixed'
    ];
    setInterval(() => {
        const adFrames = Array.from(document.querySelectorAll('iframe'))
            .filter(iframe => iframe.id.includes('google_ads'));
        Array.from(document.querySelectorAll(badguys.join()))
            .concat(adFrames)
            .forEach(e => e.parentNode.removeChild(e));
    }, 500);
})();
