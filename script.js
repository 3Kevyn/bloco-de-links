const links = [
  { name: 'GitHub',
    url: 'https://github.com/3Kevyn',
    iconUrl: 'https://cdn.discordapp.com/attachments/757215738309115977/1558589597783560223/icons8-github-logo-50.png?ex=6acdf76d&is=6acca5ed&hm=c5537c33ab74b94a79e79e8d58d637141a1063e3cb71c826f913be761b5a7f9d&'
  },
  { name: 'Instagram',
    url: 'https://www.instagram.com/1kevync',
    iconUrl: 'https://media.discordapp.net/attachments/757215738309115977/1558589436332351558/icons8-instagram-50.png?ex=6acdf746&is=6acca5c6&hm=276a5b5f32b4162218ae4d56f05b9baf9bc4ff1b07f0d490134786af73beb2f5&=&format=webp&quality=lossless&width=34&height=34'
  },
  { name: 'Twitch',
    url: 'https://twitch.tv/1kevync',
    iconUrl: 'https://media.discordapp.net/attachments/757215738309115977/1558589435464122380/icons8-twitch-50.png?ex=6acdf746&is=6acca5c6&hm=7d07f5c2a8b03cd68d92d334d7dc9665b58f5ea52a98c64b0c87a8943c806280&=&format=webp&quality=lossless&width=34&height=34'
  },
  { name: 'Paypal',
    url: 'https://www.paypal.com/paypalme/EXETLKDNPU6JL',
    iconText: '$'
  },
  { name: 'LivePix',
    url: 'https://livepix.gg/1kevync',
    iconText: '🙏'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const shell = document.querySelector('.shell');
  const card = document.querySelector('.card');
  const menu = document.querySelector('#menu-links');
  const redesSociais = document.querySelector('#social-links');

  links.forEach(({ name, url, iconUrl, iconText }, index) => { //cria a lista de elementos com base no array 
    const item = document.createElement('li');      
    item.style.setProperty('--i', index);

    const menuLink = document.createElement('a'); // cria  os  links clicaveis do array
    menuLink.href = url;
    menuLink.target = '_blank';
    menuLink.rel = 'noreferrer';

    const icon = document.createElement('span'); // cria os textos e  icones tambem do array
    icon.className = 'icon';

    if (iconUrl) {    // seta  o tamanho dos icons 
      const image = document.createElement('img');
      image.src = iconUrl;
      image.alt = '';
      image.width = 16;
      image.height = 16;
      icon.append(image);
    } else {
      icon.textContent = iconText;
    }

    menuLink.append(icon, document.createTextNode(name));
    item.append(menuLink);
    menu.append(item);

    const socialLink = document.createElement('a');
    socialLink.href = url;
    socialLink.target = '_blank';
    socialLink.rel = 'noreferrer';
    socialLink.setAttribute('aria-label', name);

    if (iconUrl) {
      const image = document.createElement('img');
      image.src = iconUrl;
      image.alt = '';
      image.width = 16;
      image.height = 16;
      socialLink.append(image);
    } else {
      socialLink.textContent = iconText;
    }

    redesSociais.append(socialLink);
  });

  if (!shell || !card) return;

  shell.addEventListener('pointermove', (event) => {
    const rect = shell.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  });

  shell.addEventListener('pointerleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
  });
});
