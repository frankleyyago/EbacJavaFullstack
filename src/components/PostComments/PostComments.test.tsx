import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve adicionar dois comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'comentario 1'
            }
        })
        fireEvent.click(screen.getByTestId('comentar'))
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'comentario 2'
            }
        })
        fireEvent.click(screen.getByTestId('comentar'))
        expect(screen.getAllByTestId('comentarios')).toHaveLength(2)
    })
});