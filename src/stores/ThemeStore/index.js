import { observable, action } from "mobx";

const Theme = {
    "light": {
        id: 0,
        themeName: "light",
        gridStyles: {
            name: "Light",
            background: "white",
            textColor: "black"
        }
    },
    "dark": {
        id: 1,
        themeName: "dark",
        gridStyles: {
            name: "Dark",
            background: "#1a202c",
            textColor: "white"
        }
    }
};

class ThemeStore {
    @observable selectedTheme = Theme["dark"];

    @action.bound
    onChangeSelectedTheme() {
        //console.log('logged');
        const { id } = this.selectedTheme;
        this.selectedTheme = (id) ? Theme["light"] :
            Theme["dark"];
    }
}

export default new ThemeStore();
