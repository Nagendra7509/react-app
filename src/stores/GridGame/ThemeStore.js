import { observable } from "mobx";

class ThemeStore {

    @observable selectedTheme = "Dark";

    onChangeSelectedTheme = () => {
        this.selectedTheme = this.selectedTheme == "Dark" ? "Light" : "Dark";
    }
}

const themeStore = new ThemeStore();
export default themeStore;
