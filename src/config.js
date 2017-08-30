export default class Config {

    getUrl(path) {

        return 'http://172.18.1.147:8080/' + path
    }

    appendRandom(name) {

        return name + Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }

    getName(name) {

        return name.substring(0, name.length - 3);
    }
}