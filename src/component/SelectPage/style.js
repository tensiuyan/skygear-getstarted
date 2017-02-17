
export default {
  selectPage: { fontFamily: "'Lato', sans-serif", padding: '24px' },
  Hide: { display: 'none' },
  header: {
    tagline: { color: '#4a4a4a', fontSize: '13px', margin: '0px' },
    title: { fontSize: '31px', margin: '17px 0px 13px' },
    subtitle: { fontSize: '16px', margin: '0px 0px 19px' },
  },
  platform: {
    link: {
      textDecoration: 'none',
    },
    item: {
      cursor: 'pointer',
      border: '1px solid #979797',
      color: '#979797',
      fill: '#979797',
      borderRadius: '6px',
      marginTop: '16px',
      overflow: 'auto',
      position: 'relative',
    },
    Active: {
      cursor: 'auto',
      border: '1px solid #007bd4',
      color: '#007bd4',
      fill: '#007bd4',
    },
    tick: { position: 'absolute', right: '18px', top: '24px' },
    icon: { position: 'absolute', top: '10px', left: '31px', width: '40px' },
    title: { fontSize: '16px', margin: '16px 51px 0px 101px' },
    desc: { fontSize: '12px', margin: '0px 51px 18px 101px' },
  },
  project: {
    row: {
      margin: '0px 0px 20px 101px',
      '@media (max-width: 544px)': {
        margin: '0px 0px 20px 8px',
      },
    },
    column: {
      display: 'inline-block',
      width: '50%',
      '@media (max-width: 768px)': {
        width: '100%',
        marginBottom: '8px',
      },
    },
    item: {
      color: '#fff',
      fill: '#fff',
      background: '#007bd4',
      width: '98%',
      display: 'inline-block',
      borderRadius: '6px',
      position: 'relative',
      cursor: 'pointer',
    },
    icon: { position: 'absolute', top: '12px', left: '17px', width: '35px' },
    title: { fontSize: '16px', margin: '11px 0px 0px 66px' },
    desc: { fontSize: '12px', margin: '0px 5px 14px 66px' },
  },
};
