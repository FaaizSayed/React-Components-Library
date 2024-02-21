import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button component', () => { 
    it('Renders the button component without crashing', () => {
        render(<Button />);
    }); 

    it('Renders the button with correct classes based on props', () => {
        render(<Button color='red' textSize='medium' />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-red-500 hover:bg-red-700 text-white text-base');
    });  
    
    it('Test the button click event', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick} />);
        const button = screen.getByRole('button')
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    }); 
})