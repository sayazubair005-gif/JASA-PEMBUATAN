/* RETRO — CHARACTER LOBBY. Load after the current index.html script. */
(function () {
  'use strict';

  /* The character art files are the exact images uploaded by the site owner. */
  var members = [
    { name: 'Alfa', avatar: 'developer-1.jpg', hero: 'hero-alfa.png', skinKey: 'nana', heroName: 'NANA', skinName: 'SLUMBER PARTY', tier: 'ELITE', slot: 'PLAYER 01' },
    { name: 'Anak e Pak Yon', avatar: 'developer-2.jpg', hero: 'hero-anak-e-pak-yon.png', skinKey: 'sun', heroName: 'SUN', skinName: 'MONKEY KING', tier: 'DEFAULT', slot: 'PLAYER 02' },
    { name: 'Zubair', avatar: 'developer-3.jpg', hero: 'hero-zubair.png', skinKey: 'ling', heroName: 'LING', skinName: 'SERENE PLUME', tier: 'COLLECTOR', slot: 'PLAYER 03' },
    { name: 'Faruk', avatar: 'developer-4.jpg', hero: 'hero-faruk.png', skinKey: 'balmond', heroName: 'BALMOND', skinName: 'BLOODY BEAST', tier: 'DEFAULT', slot: 'PLAYER 04' }
  ];

  var grid = document.getElementById('mg');
  if (!grid) return;

  grid.classList.add('hero-lobby-grid');
  grid.innerHTML = members.map(function (member, index) {
    var initials = member.name.split(/\s+/).map(function (part) { return part.charAt(0); }).join('').slice(0, 2).toUpperCase();
    return '' +
      '<article class="hero-lobby-card" data-skin="' + member.skinKey + '" tabindex="0" aria-label="' + member.name + ' menggunakan hero ' + member.heroName + '">' +
        '<div class="hero-lobby-topline">' +
          '<span class="hero-lobby-mark"><i></i> RETRO // HERO LOBBY</span>' +
          '<span class="hero-lobby-ready">● READY</span>' +
        '</div>' +
        '<div class="hero-lobby-stage">' +
          '<span class="hero-lobby-orb o1" aria-hidden="true"></span>' +
          '<span class="hero-lobby-orb o2" aria-hidden="true"></span>' +
          '<span class="hero-lobby-orb o3" aria-hidden="true"></span>' +
          '<span class="hero-lobby-sweep" aria-hidden="true"></span>' +
          '<img class="hero-lobby-art" src="' + member.hero + '" alt="' + member.heroName + ' — ' + member.skinName + '" loading="lazy">' +
          '<span class="hero-lobby-watermark">RETRO / ' + String(index + 1).padStart(2, '0') + '</span>' +
        '</div>' +
        '<div class="hero-lobby-info">' +
          '<span class="hero-lobby-avatar-wrap"><span class="hero-lobby-avatar-fallback">' + initials + '</span><img src="' + member.avatar + '" alt="Foto developer ' + member.name + '" loading="lazy" onerror="this.remove()"></span>' +
          '<div class="hero-lobby-name"><small>DEVELOPER</small><h3>' + member.name + '</h3><span class="hero-lobby-hero-name">' + member.heroName + ' · ' + member.skinName + '</span></div>' +
          '<span class="hero-lobby-skin-tag">' + member.tier + '<br>SKIN</span>' +
        '</div>' +
        '<div class="hero-lobby-footer"><span>CHARACTER SELECTED</span><b>✦ IDLE MODE</b></div>' +
      '</article>';
  }).join('');

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  Array.prototype.forEach.call(grid.querySelectorAll('.hero-lobby-card'), function (card) {
    card.addEventListener('pointermove', function (event) {
      if (event.pointerType !== 'mouse') return;
      var rect = card.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width;
      var y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--hero-tilt-x', ((0.5 - y) * 4.5).toFixed(2) + 'deg');
      card.style.setProperty('--hero-tilt-y', ((x - 0.5) * 6).toFixed(2) + 'deg');
      card.style.setProperty('--hero-pointer-x', (x * 100).toFixed(1) + '%');
      card.style.setProperty('--hero-pointer-y', (y * 100).toFixed(1) + '%');
    });
    card.addEventListener('pointerleave', function () {
      card.style.setProperty('--hero-tilt-x', '0deg');
      card.style.setProperty('--hero-tilt-y', '0deg');
      card.style.setProperty('--hero-pointer-x', '50%');
      card.style.setProperty('--hero-pointer-y', '40%');
    });
  });
})();
