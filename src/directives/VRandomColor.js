export default {
    beforeMount(el, binding) {
        const atr = (binding.value === undefined) ? 'color' : binding.value;

        el.style[atr] = (() => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }

            return color;
        })();
    }
}