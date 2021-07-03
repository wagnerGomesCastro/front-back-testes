const PlayerComponent = {
  template: `
    <div class="player">
      <button @click.preventDefault=getAudio()> Clique aqui</button>
      <div class="item">
        <p class="title">Aúdio do Servidor .WAV 1</p>
        <audio controls="controls">
          <source src="https://m2-vonixbackup-atual.s3.amazonaws.com/2021/05/05/1620217382.100061.WAV?AWSAccessKeyId=AKIAZEEHK6GCPVOYMOH5&Expires=1625271510&Signature=xQDzHIhGenWEyXiXUy2CE1a1qGw%3D" type="audio/ogg">
          <source src="https://m2-vonixbackup-atual.s3.amazonaws.com/2021/05/05/1620217382.100061.WAV?AWSAccessKeyId=AKIAZEEHK6GCPVOYMOH5&Expires=1625271510&Signature=xQDzHIhGenWEyXiXUy2CE1a1qGw%3D" type="audio/mp3" />
          <source src="https://m2-vonixbackup-atual.s3.amazonaws.com/2021/05/05/1620217382.100061.WAV?AWSAccessKeyId=AKIAZEEHK6GCPVOYMOH5&Expires=1625271510&Signature=xQDzHIhGenWEyXiXUy2CE1a1qGw%3D" type="audio/wav">
          <source src="https://m2-vonixbackup-atual.s3.amazonaws.com/2021/05/05/1620217382.100061.WAV?AWSAccessKeyId=AKIAZEEHK6GCPVOYMOH5&Expires=1625271510&Signature=xQDzHIhGenWEyXiXUy2CE1a1qGw%3D" type="audio/mpeg">
          Seu navegador não suporta o elemento .
        </audio>

        <p class="title">Aúdio do Servidor .WAV 2 </p>
        <audio for="players in p" controls="controls">
          <source key={p.id} :src="p.src" :type=""p.type">
          Seu navegador não suporta o elemento .
        </audio>

        <p class="title">Aúdio do Servidor .WAV 3 </p>
        <audio controls v-if="audio != ''">
          <source :src="audio.scr"  :type="audio.type">
        </audio>

        <p class="title">Aúdio do Servidor .WAV 5 </p>
        <audio controls>
          <source src="/assets/media/1620217382.100061.wav" type="audio/wav" />
          Seu navegador não suporta o elemento .
        </audio>
      </div>
    </div>
  `,

  data() {
    return {
      players: [
        {
          id: 1,
          src: 'https://m2-vonixbackup-atual.s3.amazonaws.com/2021/05/05/1620217382.100061.WAV?AWSAccessKeyId=AKIAZEEHK6GCPVOYMOH5&Expires=1625271510&Signature=xQDzHIhGenWEyXiXUy2CE1a1qGw%3D',
          type: 'audio/wav'
        },
        {
          id: 2,
          src: 'https://m2-vonixbackup-atual.s3.amazonaws.com/2021/05/05/1620217382.100061.ogg?AWSAccessKeyId=AKIAZEEHK6GCPVOYMOH5&Expires=1625271510&Signature=xQDzHIhGenWEyXiXUy2CE1a1qGw%3D',
          type: 'audio/ogg'
        },
        {
          id: 3,
          src: 'https://m2-vonixbackup-atual.s3.amazonaws.com/2021/05/05/1620217382.100061.ogg?AWSAccessKeyId=AKIAZEEHK6GCPVOYMOH5&Expires=1625271510&Signature=xQDzHIhGenWEyXiXUy2CE1a1qGw%3D',
          type: 'audio/mp3'
        },
      ],
      audio: {
        src: 'https://m2-vonixbackup-atual.s3.amazonaws.com/2021/05/05/1620217382.100061.WAV?AWSAccessKeyId=AKIAZEEHK6GCPVOYMOH5&Expires=1625271510&Signature=xQDzHIhGenWEyXiXUy2CE1a1qGw%3D',
        type: 'audio/wav'
      }
    };
  },
  methods: {
    getAudio() {
      alert('Wagne')
    }
  }
}

const stylesPalyer = document.createElement('style');

stylesPalyer.innerHTML = `
  .player {
    color: blueviolet;
  }
  .playerP {
    color: red;
  }
`;

document.head.appendChild(stylesPalyer);
