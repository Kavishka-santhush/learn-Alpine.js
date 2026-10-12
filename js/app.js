import { counterComponent } from './counter.js';
import { userComponent } from './user.js';

document.addEventListener('alpine:init', () => {
    // 1. Global Store එකක් හැදීම (සියලුම කම්පොනන්ට්ස් වලට ප්‍රවේශ විය හැක)
    Alpine.store('appState', {
        appName: 'Alpine Framework Architecture',
        theme: 'light',
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
        }
    });

    // 2. වෙනම ලියූ කම්පොනන්ට්ස් Alpine වෙත ලියාපදිංචි කිරීම (Register)
    Alpine.data('counterData', counterComponent);
    Alpine.data('userData', userComponent);
});