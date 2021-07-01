import styled from 'styled-components';
import css from '@styled-system/css';

export const ContainerDiv = styled(`div`)(
    css({
      marginTop: 10,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      border: 'solid',
      borderWidth: '5px',
      borderColor: '#fef3ec'
    })
  );
export const Progress = styled('div')(
  css({
    backgroundColor: '#fef3ec',
    height: '24px',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5) inset',
    marginY: '14px',
    borderRadius: '3px'
  }),
);
export const Progressdone = styled.span(
  css({
    backgroundColor: '#f48245',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
    width: '0',
    opacity: '0',
    transition: '8s ease 0.3s',
    paddingLeft: '25px'
  }),
);
