addEventListener("mousemove", (e) => {
    console.log(`Mouse moved to: (${e.clientX}, ${e.clientY})`);
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});
