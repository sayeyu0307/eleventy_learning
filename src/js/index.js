// const player = new Player({
//     id: 'vs',
//     url: 'http://cloud-tx:8088/profile/upload/2022/01/07/a451e501-d5ff-41da-9cbb-c97d6dcfc0d6.mp3',
//     fitVideoSize: 'fixHeight'
// })
let element = document.getElementById("vs")
const src = element.getAttribute("data-src")
const voice = element.getAttribute("data-name")

let player = new Music({
    id: 'vs',
    url: [
      {
        src: `/img/${src}`,
        name: voice,
        vid: '000001'
        // poster: '/img/142a3a98-0381-4bd9-8db9-8ef19d169846.jpg'
      }
    ],
    volume: 0.8,
    height: 50,
    width: 300,
    // fluid: true,
    ignores: ['cover','prev','next','backward','forward']
  })

// var sound = new Howl({
//     src: ['http://cloud-tx:8088/profile/upload/2022/01/07/a451e501-d5ff-41da-9cbb-c97d6dcfc0d6.mp3']
//   });
  
//   sound.play();