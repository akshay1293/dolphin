import path from 'path';

export default class Config {
    getUrl(_path) {
        let _url = 'http://' + path.join('172.18.1.147:8080/' + _path) // 172.18.1.147:8080/iamjaghitsingh/hi.txt
        return _url;
    }

    appendRandom(name) {

        return name + Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }

    getName(name) {

        return name.substring(0, name.length - 3);
    }
}