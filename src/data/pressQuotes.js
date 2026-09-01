const pressQuotes = [
  {
    source: 'New Orleans Magazine',
    href: 'https://www.myneworleans.com/tasche-de-la-rochas-swinging-soul-and-psychedelic-doo-wop/',
    quote:
      'De la Rocha’s inherent “Portland” sound transfigured itself on those French Quarter streets into something as soulful as it is mournful and as ecstatic as it is explosive, a big band battle cry... spinning a primal phantasmagoria that beats with the sound of sadness, rage, and grace; a siren song of New Orleans beckoning us all back home where we belong.',
  },
  {
    source: 'Fifty Grande',
    href: 'https://www.fiftygrande.com/5-new-orleans-artists-refashioning-the-citys-music/',
    quote:
      'With three guitarists, a bassist, a drummer and four vocalists in tow, Tasche and the Psychedelic Roses utilize grungy guitar riffs and multipart vocal harmonies to create their version of punk, surf, cabaret and psychedelic music all rolled into one.',
  },
  {
    source: 'Offbeat Magazine',
    href: 'https://www.offbeat.com/news/how-tasche-de-la-rocha-found-the-feminine-spirit-of-new-orleans/',
    quote:
      'From ‘50s doo-wop and classic R&B to surf rock and grunge, this album rarely plays it straight. [Tasche\'s] fascination with vintage styles is balanced with twists of synths and modern effects... huge sonic peaks and valleys.',
  },
  {
    source: 'Black Is the New AP Style',
    href: 'https://www.blackisthenewapstyle.com/2023/02/celebration-through-pain-interview-with.html?fbclid=IwAR3bI4DM92c4qQpp6j1wsJSy5HrjL6MlwWgylEMajLcRMSF5ZWwRrma_Vdc&m=1',
    quote:
      'The songs on the album share a central theme of unapologetic transformation... a never-ending love letter to the place that made [de la Rocha] who she is today.',
  },
  {
    source: 'American Pancake',
    href: 'https://www.americanpancake.com/2022/12/tasche-and-psychedelic-roses-celebrate.html',
    quote:
      'The surreal psychedelic psycho-dramatic horror pastiche of the "Happy Song" Official Video... feels like a crazy garish amalgam of John Waters, Natalie Erika James and David Cronenberg. The punchy sonics energized by the band\'s signature blend of cabaret meets doo wop punk meets surf punk meets progressive jam rock and more as punctuated by Tasche de la Rocha unique vocals offers inside and out twists and turns. In the end, "Happy Song" from Tasche and the Psychedelic Roses eponymous album feels like a thrill ride of sorts fused from darks seeds, "a murder ballad written in honor of survivors" as the whole band chews up the scenery in the most artful ways.',
  },
  {
    source: 'Offbeat Magazine',
    href: 'https://www.offbeat.com/news/new-releases-in-new-orleans-koan-kenpachi-tasche-de-la-rocha-more/',
    quote:
      'Tasche de la Rocha and the Psychedelic Roses approach their full potential on this release, blending sounds of doo-wop, surf rock, cabaret, punk and ’70s-era classic rock. De la Rocha is a captivating vocalist who aesthetically feels plucked right out of the ‘50s but lyrically provides a level of emotional intelligence that seemingly can only exist in 2022.',
  },
  {
    source: 'Conversations About Her',
    href: 'https://conversationsabouther.net/new-orleans-band-tasche-and-the-psychedelic-roses-release-happy-song/',
    quote:
      '...grunge guitar riffs, punk, doo-wop, surf, cabaret, and psychedelic influences... balancing a fine line between sweetness and devastation.',
  },
  {
    source: 'Happy Mag',
    href: 'https://happymag.tv/tasche-and-the-psychedelic-roses-self-titled-album-track-by-track/?mibextid=Zxz2cZ',
    quote:
      'intoxicating...an authentic sound that will leave you in awe. Their music sways between the lines of sweetness and destruction.',
  },
  {
    source: 'Happy Mag',
    href: 'https://happymag.tv/tasche-and-the-psychedelic-roses-new-self-titled-album/',
    quote:
      'electrifying...energetic...dynamic, infectious... Across 10 riotous, evocative and effervescent tracks, the multi-genre collective effortlessly fuse elements of psychedelia, glam rock, garage and doo wop. Forged in the rhythm, joy, and despair of New Orleans, frontwoman Tasche de la Rocha emits a sound that is both contemporary and vintage.',
  },
  {
    source: 'Guitar Girl',
    href: 'https://guitargirlmag.com/featured/tasche-de-la-rocha-and-the-psychedelic-roses-drop-self-titled-album/',
    quote:
      'Simultaneously innovative and terrifically retro, Tasche De La Rocha and the Psychedelic Roses is a grand, swanky album highlighted by superb vocals.',
  },
  {
    source: 'Gambit',
    href: 'https://www.nola.com/gambit/music/article_510282ea-6108-11ed-8e6b-23c36d7a4b35.html',
    quote:
      'New Orleans alternative rock band Tasche and the Psychedelic Roses live up to their name in the new mind-melting music video for “Happy Song,” the latest single from the band’s self-titled album.',
  },
  {
    source: 'Antigravity Magazine',
    href: 'https://antigravitymagazine.com/feature/tasche-de-la-rocha-a-bloody-love-note-to-the-universe/',
    quote:
      'With songs crafted over the course of five years and an album recorded during the height of the pandemic, Tasche and the Psychedelic Roses debut a new, evolved sound on their self-titled sophomore album, released on Halloween night. The album showcases a much heavier psych-rock‘n’roll sound for the group, with twinges of grunge and punk, and drawing inspiration from artists like Joe Meek, David Bowie, Nina Hagen, and Queen. ... With roots in R&B that reflected influences of gospel and doo-wop, the group’s sound has grown to include a plethora of genres that ultimately speaks more about their desire to play what feels right or fresh versus that which they already know and have played before.',
  },
  {
    source: 'American Pancake',
    href: 'https://www.americanpancake.com/2022/10/tasche-and-psychedelic-roses-and.html',
    quote:
      'Tasche has a thoroughly unique voice, like literally but also in terms of the art she seeds and her and her band give birth to. \'Dying Art\' in terms of some of it\'s shapes, sonic temperaments and attitudes made me think of the progressive / experimental side of the Beatles, of Abbey Road in particular but put though an art punk filter (think Pere Ubu, Mission of Burma) and as exquisitely jammy and crazy (good crazy) Tasche and the Psychedelic Roses get here, they equally can feel just as elegant and therein lies their off-kilter brilliance... It will likely stun you and that is a wonderful thing.',
  },
  {
    source: 'buffaBLOG',
    href: 'https://buffablog.com/tasche-the-psychedelic-roses-dying-art/',
    quote:
      'Tasche & the Psychedelic Roses hit us up with their new single, “Dying Art” and we were immediately drawn to its whimsical vibe. With jaunty guitars, silky harmonies, and a retro sensibility that never sounds dated, Tasche & co. whip up a magical brew of rock-n-roll flavored indie with hints of psychedelia. Stick around for the swirly guitar theatrics and slow-down bridge that ultimately winds its way back into an ooh-laden symphony.',
  },
  {
    source: 'Wonderland',
    href: 'https://www.wonderlandmagazine.com/2022/10/21/premiere-tasche-and-the-psychedelic-roses/',
    quote:
      '[Co-producers Tasche de la Rocha and Eric Heigle] capture the duality of life’s tumultous bumps and indents, at different points conveying unsettling uncertainty and blissful euphoria.',
  },
  {
    source: 'V13',
    href: 'https://v13.net/2022/09/tasche-and-the-psychedelic-roses-dying-art-single-premiere/',
    quote:
      'Led by the charismatic and compelling Tasche de la Rocha, the band rocks with freedom and candour typical of the great punk acts of past and present, as well as a feminist spirit that really helps bring the energy. Joining four-part vocal harmonies, grunge-like guitar riffs, a punk rock disposition, and pinches of doo-wop, cabaret, and psychedelia, Tasche and her team really pack a powerful punch for rock fans of both past and present.',
  },
  {
    source: 'American Pancake',
    href: 'https://www.americanpancake.com/2022/09/tasche-and-psychedelic-roses-and.html',
    quote:
      '...potent...so divergent, so stunning... The exquisite progressive art rock meets oompah is not only fun but rocks so hard. There are nods to surf punk to psych and stoner rock... There is also a beautifully odd sensibility, a touch of 80\'s caberet and punk / new wave...',
  },
  {
    source: 'Glide Magazine',
    href: 'https://glidemagazine.com/280863/listen-tasche-and-the-psychedelic-roses-bring-throwback-psych-doo-wop-explosion-via-hook/',
    quote:
      'Tasche and the Psychedelic Roses brings together a menagerie of genres like only a song created in The Big Easy can with the energy of a busker contained only by the performance’s pinpoint precision. Tight vocal harmonies wind in and out of crunchy surf guitars to create an almost manic, psychedelic doo-wop explosion that’s impossible to turn away from until the very end.',
  },
  {
    source: 'Roadie Music',
    href: 'https://roadie-music.com/tasche-and-the-psychedelic-roses-traz-um-incrivel-lancamento-com-hook/',
    quote:
      'Lively sound...beautiful instrumental performance and excellent vocal lines... Hook is a composition full of energy where guitar, bass and drums form a perfect sound layer so that vocal melodies can be applied in a sensational and exciting way, closing the ideal package of a lot of talent and competence of a fantastic band. (translation)',
  },
  {
    source: 'Celebmix',
    href: 'https://celebmix.com/music-premiere-tasche-and-the-psychedelic-roses-releases-hook/',
    quote:
      '...edgy, jarring guitars flowing into a pop-flavored melody with tangs of alt-rock... At once innovative and surging with a latent caustic energy that is finally liberated, “Hook” parades the creative talents of Tasche and the Psychedelic Roses.',
  },
  {
    source: 'New Orleans Gambit',
    href: 'https://www.nola.com/gambit/music/article_bf7317fc-b93a-5a87-8a78-837796ab4605.html',
    quote:
      '...ethereal, plaintive blues and shuffling, rough-hewn doo-wop and R&B, all tied together by the singer-songwriter\'s unmistakable voice — a barbed, wiry howl',
  },
];

export default pressQuotes;
