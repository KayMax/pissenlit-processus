Vue.component('section-header', {
    template: '<div class="section-header">' +
        '<p><i>{{ text }}</i></p>' +
        '<p><img :src="img"></p>' +
        '<div class="page-des">' +
        '<p v-for="(item,key) in des_options" :key="key"><span>{{ item }}</span></p>' +
        '</div></div>',
    data: function () {
        return {
            text: '“   Je vous donne une photo, Qu‘est-ce que vous me donnez en échange ？”',
            img: "./assets/images/p4.jpg",
            des_options: ["15 avril 2018,  j'ai pris une centaine de photos de pissenlits comme un souvenir du printemps.",
                "Un jour,  j'ai vu un agent municipal qui était en train de brûler des pissenlits qui vivaient au bord de la route, cela me fait pensé que le pissenlit est une fleur sauvage, donc j'ai décidé de présenter des pissenlits en une façon spéciale.",
                "J'ai imprimé les pissenlits en photo 10 × 10 cm, j'ai réalisé un troc dans la rue avec des passants pour mettre les photos de pissenlits comme des vrais pissenlits qui s'envole au vent.",
                "Je fais référence à 《 The Artist is Present 》(2012) de Marina Abramovic, j’aime bien son idée de dialogue par le regard."]
        }
    }
});
Vue.component('page-lists', {
    template: '<div class="page-lists"><div class="pic-lists">' +
        '<div class="page-lists-item" v-for="(item,key) in page_list" :key="key">' +
        '<img :src="item.href">' +
        '</div>' +
        '</div>' +
        '<div class="des-lists">' +
        '<div v-for="(qitem,qkey) in question" :key="qkey">' +
        '<p v-for="(ditem,dkey) in qitem" :key="dkey"><span>{{ ditem }}</span></p>' +
        '</div>' +
        '</div>' +
        '</div>',
    data: function () {
        return {
            page_list: [{
                name: "01",
                des: "",
                href: "./assets/images/p1.jpg",
            },{
                name: "02",
                des: "",
                href: "./assets/images/p2.jpg",
            },{
                name: "03",
                des: "",
                href: "./assets/images/p3.jpg",
            }],
            question: [[
                "Pendant le processus d'échange, ce projet posait deux questions：",
                "1, qu’est-ce que un endroit public ？",
                "quand je m’installais dans la gare, le directeur de la gare me demander de sortir, également dans le parc de la pépinière de Nancy."
            ],[
                "2, qu’est-ce que vous avez en échange ？",
                "il y a toujour des gens qui ne connaissaient pas des choses ou des esprit que ils possédaient, ils savaient pas avec quoi échanger."
            ]]
        }
    }
});
Vue.component('section-footer', {
    template: '<div class="section-footer"><a class="button" :href="href" target="_blank"><span>{{ title }}</span></a></div>',
    data: function () {
        return {
            title: 'The result',
            href: "https://kaymax.github.io/pissenlit/"
        }
    }
});