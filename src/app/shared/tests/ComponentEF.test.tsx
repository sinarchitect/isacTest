import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WrapperComponent from '../components/WrapperComponent';

describe('WrapperComponent', () => {
    it('updates both child components when shared state changes', () => {
        const { getByLabelText } = render(<WrapperComponent />);
        const inputE = getByLabelText('Component E Input') as HTMLInputElement;
        const inputF = getByLabelText('Component F Input') as HTMLInputElement;
        
        fireEvent.change(inputE, { target: { value: 'Sinaaa' } });
        expect(inputF.value).toBe('Sinaaa');
        
        fireEvent.change(inputF, { target: { value: 'Isaccc' } });
        expect(inputE.value).toBe('Isaccc');
    });
});