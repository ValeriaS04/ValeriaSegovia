import { say } from 'cowsay';

let vk = (say({ text: 'grazing in the browser' }));
document.getElementById('vaca').innerText = vk;