import { fonts } from './shared/fonts';

export const todoStyles = {
  noTodos: {
    paddingTop: '10rem',
    textAlign: 'center',
    fontSize: '2.6rem',
    letterSpacing: '0.03rem',
    textTransform: 'capitalize',
    fontFamily: fonts.patua
  },

  todos: {
    background: 'lighblue',
    textAlign: 'center',
    fontSize: '2.3rem',
    letterSpacing: '0.05rem',
    textTransform: 'capitalize',
    fontFamily: fonts.patua
  },

  todoButton: {
    marginLeft: '1rem',
    textAlign: 'center',
    padding: '5px',
    borderRadius: '10px',
    width: '8rem',
    outline: 'none',
    fontSize: '1.3rem',
    letterSpacing: '3px',
    transition: '0.3s ease-in-out',
    fontFamily: fonts.patua,
    color: 'rgb(70, 161, 222)',
    cursor: 'pointer'
  },

  textField: {
    width: '80%',
    border: 'none',
    outline: 'none',
    fontSize: '2.5rem',
    borderBottom: 'solid #000000',
    textAlign: 'center',
    paddingBottom: '10px',
    fontFamily: fonts.patua
  },

  form: { marginTop: '2.6rem', padding: '10rem 0 0 12rem' },

  formButton: {
    margin: '2rem 0 0 20rem',
    textAlign: 'center',
    padding: '6px',
    border: '2px solid #000000',
    borderRadius: '10px',
    width: '12%',
    outline: 'none',
    fontSize: '1.8rem',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    transition: '0.3s ease-in-out',
    fontFamily: fonts.patua,
    cursor: 'pointer'
  }
};
