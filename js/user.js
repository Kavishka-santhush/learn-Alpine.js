export function userComponent() {
    return {
        username: 'සන්තුෂ්',
        isEditing: false,
        saveUser(newVal) {
            this.username = newVal;
            this.isEditing = false;
        }
    };
}